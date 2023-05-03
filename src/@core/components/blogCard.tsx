import { FC } from "react";

interface Props {
    title: string;
    desc: string;
};

const BlogCard: FC<Props> = ({ title, desc }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
};

export default BlogCard