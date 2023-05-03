import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props { };

const Blogs: NextPage<Props> = () => {
    const [posts, setPosts] = useState<{ title: string; slug: string; meta: string; }[]>();

    const fetchPosts = async () => {
        const data = await fetch('/api/posts').then(data => data.json());
        console.log(data)
    }
    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div>
            blogs
        </div>
    )
};

export default Blogs