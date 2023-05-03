import BlogCard from "@/@core/components/blogCard";
import { NextPage, GetStaticProps } from "next";

interface Props { };

export const getStaticProps: GetStaticProps = async () => {
    const res = fetch('/api/posts').then(data => data.json());
    return {
        props: {}
    }
}


const Blogs: NextPage<Props> = () => {
    return (
        <div>
            {
                posts?.map((post, index) => (
                    <BlogCard key={index} title={post.title} desc={post.meta} />
                ))
            }
        </div>
    )
};

export default Blogs