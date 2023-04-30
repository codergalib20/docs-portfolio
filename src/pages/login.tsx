const Login: React.FC = () => {

    const title: string = 'Welcome to Galib\'s World'

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-[400px] block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Please sign-in to your account and start the adventure</p>
                </div>
                {/* Fields------------- */}
                <div>
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
                    </div>
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
            </div>
        </div>
    )
}

export default Login;