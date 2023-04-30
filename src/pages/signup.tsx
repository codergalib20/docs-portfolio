import Header from '@/@core/components/header';
import Link from 'next/link';


const Signup: React.FC = () => {
    const title: string = 'Adventure starts here 🚀'

    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-full mt-8">
                <div className="w-full sm:max-w-[400px] block h-full  sm:h-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Make your app management easy and fun!</p>
                    </div>
                    {/* Fields------------- */}
                    <div className="mt-8">
                        <div className="mb-6">
                            <label
                                htmlFor="fullname"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Full Name</label>
                            <input
                                type="fullname"
                                id="fullname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Asadullah Hil Galib"
                                required />
                        </div >
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john.doe@company.com"
                                required />
                        </div >
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Password</label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="•••••••••"
                                required
                            />
                        </div>
                    </div>
                    {/* Extra functionality */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="agree"
                                    aria-describedby="agree"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="agree"
                                    className="text-gray-500 dark:text-gray-300"
                                >I agree to privacy
                                    <Link legacyBehavior href="/policy-terms"><a className='text-[#fa6985]'> policy & terms</a></Link>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="my-4 w-full text-white bg-[#fa6985] hover:bg-[#f55776] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            SignUp
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                            Already have an account yet?
                            <Link href="/login" legacyBehavior><a
                                className="font-medium text-[#fa6985] hover:underline dark:text-primary-500">
                                Sign In
                            </a></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;