import Sidebar from "@/@core/dashboard/sidebar";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props { };

const Dashboard: NextPage<Props> = () => {
    const { query } = useRouter() || {}


    return (
        <div className="m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500 w-full h-screen flex">
            <div className="w-full max-w-[250px] h-full overflow-y-scroll relative">
                <Sidebar />
            </div>
            <div className="w-full"></div>
        </div>
    )
};

export default Dashboard