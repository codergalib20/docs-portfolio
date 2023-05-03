import BlogCard from "@/@core/components/blogCard";
import { NextPage, GetStaticProps } from "next";

interface Props {
    meta: string;
    title: string;
    slug: string;
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();
    return {
        props: { posts: data.posts }
    }
}

const Blogs: NextPage<Props> = ({ posts }) => {
    console.log(posts);
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