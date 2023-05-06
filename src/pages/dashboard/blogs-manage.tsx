import { NextPage } from "next";
import Editor from '@/lib/editor';
interface Props { };

const BlogsManage: NextPage<Props> = () => {
    return (
        <div className="px-8">
            <Editor />
        </div>
    )
};

export default BlogsManage