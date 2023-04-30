const Login: React.FC = () => {

    const title: string = 'Welcome to Galib\'s World'

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-[400px] block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Please sign-in to your account and start the adventure</p>
            </div>
        </div>
    )
}

export default Login;