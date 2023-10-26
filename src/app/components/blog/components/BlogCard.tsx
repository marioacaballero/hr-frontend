import React from "react";
import { GiShare } from "react-icons/gi";

function BlogCard({
  title,
  metadata,
  body,
}: {
  title: string;
  metadata: string;
  body: string;
}) {
  return (
    <div>
      <header>
        <h2>{title}</h2>
        <h4>{metadata}</h4>
      </header>
      <p>{body}</p>
      <GiShare />
      <button>Ver más</button>
    </div>
  );
}

export default BlogCard;
