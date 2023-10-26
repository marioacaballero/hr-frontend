import React from "react";
import BlogCard from "./components/BlogCard";

function Blog() {
  return (
    <div>
      <h2>Nuestro Blog</h2>
      <BlogCard
        key={"blog11"}
        title={"titulo"}
        metadata={"metadata"}
        body={"body text"}
      />
      <BlogCard
        key={"blog11"}
        title={"titulo"}
        metadata={"metadata"}
        body={"body text"}
      />
    </div>
  );
}

export default Blog;
