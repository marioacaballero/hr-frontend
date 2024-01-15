import Image from "next/image";
import React from "react";
import { GiShare } from "react-icons/gi";
import blogD from "../../../../../public/blog.jpg";

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
    <div className="flex w-1/3 flex-col rounded-xl border border-gray-300 bg-white">
      <header className="">
        <Image src={blogD} alt="default" className="mb-4 h-64 rounded-t-xl" />
        <h2 className="indent-5 text-lg capitalize">{title}</h2>
        <h4 className="indent-5 text-sm capitalize">{metadata}</h4>
      </header>
      <p className="p-5">{body}</p>
      <div className="flex items-center justify-end gap-3 p-6">
        <div className="text-2xl text-gray-500">
          <GiShare />
        </div>
        <button className="rounded-full bg-[#6750A4] px-6 py-3 text-sm text-white">
          Ver más
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
