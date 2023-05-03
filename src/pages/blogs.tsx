import BlogCard from "@/@core/components/blogCard";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props { };

const Blogs: NextPage<Props> = () => {
    const [posts, setPosts] = useState<{ title: string; slug: string; meta: string; }[]>();

    const fetchPosts = async () => {
        const data = await fetch('/api/posts').then(data => data.json());
        setPosts(data.posts);
    }
    useEffect(() => {
        fetchPosts();
    }, [])
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