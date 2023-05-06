import { NextPage } from "next";
import Editor from '@/lib/editor';
interface Props { };

const BlogsManage: NextPage<Props> = () => {
    return (
        <div>
            <Editor />
        </div>
    )
};

export default BlogsManage