export const register = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  // Validate input
  await check("name", "Name is required").notEmpty().run(req);
  await check("email", "Please include a valid email").isEmail().run(req);
  await check("password", "Please enter a password with 6 or more characters")
    .isLength({ min: 6 })
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    res.json({ msg: "User registered" });
  } catch (error) {
    console.error((error: Error) => error.message);
    res.status(500).send("Server error");
  }
};
