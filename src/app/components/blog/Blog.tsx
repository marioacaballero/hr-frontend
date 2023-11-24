import React from "react";
import BlogCard from "./components/BlogCard";

const blogsHardCode = [
  {
    id: "1",
    title: "title",
    metadata: "metadata",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  },
  {
    id: "2",
    title: "title",
    metadata: "metadata",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  },
];

function Blog() {
  return (
    <div className="mb-10 mt-14 flex flex-col items-center justify-between">
      <h2 className="mb-6 w-full text-center text-3xl font-semibold">
        Nuestro Blog
      </h2>
      <section className="align-center flex w-full justify-center gap-20">
        {blogsHardCode.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            metadata={blog.metadata}
            body={blog.body}
          />
        ))}
      </section>
    </div>
  );
}

export default Blog;
