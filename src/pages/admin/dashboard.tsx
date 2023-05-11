import BlogsDashboard from "@/@core/dashboard/pages/blogs";
import DefaultPage from "@/@core/dashboard/pages/default";
import DocumentDashboard from "@/@core/dashboard/pages/documents";
import Sidebar from "@/@core/dashboard/sidebar";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props { };

const Dashboard: NextPage<Props> = () => {
    const { query } = useRouter() || {}
    
    
    return (
        <div className="m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500 w-full h-screen flex gap-4">
            <div className="w-full max-w-[250px] h-full overflow-y-scroll relative">
                <Sidebar />
            </div>
            <div className="w-full h-full overflow-y-scroll">
                {!query.tab && <DefaultPage />}
                {query.tab === 'blogs' && <BlogsDashboard />}
                {query.tab === 'documents' && <DocumentDashboard />}
            </div>
        </div>
    )
};

export default Dashboard