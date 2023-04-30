type Data = {
  name: string;
  icon: string;
  sub?: {
    name: string;
    icon: string;
  }[];
};

const menus: Data[] = [
  {
    name: "Home",
    icon: "icon",
  },
  {
    name: "About",
    icon: "icon",
    sub: [
      {
        name: "About 2",
        icon: "icon2",
      },
      {
        name: "About 2",
        icon: "icon2",
      },
    ],
  },
];

export default menus;
