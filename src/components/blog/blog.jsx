import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blog, setblog] = useState([])

    useEffect(() => {
        fetch('../../../public/blog.json')
            .then(res => res.json())
            .then(data => setblog(data))
    }, [])

    return (
        <div>
           { console.log(blog)}
        </div>
    );
};

export default Blog;