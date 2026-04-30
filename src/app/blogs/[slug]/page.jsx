"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
// import { blogs } from "@/data/blogs";
import { blogs } from "../../../data/blogs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl">
        Blog not found 😢
      </div>
    );
  }

  return (
    <section className="bg-black py-14">
<Link
  href="/blogs"
  className="flex items-center gap-2 text-white-600 hover:text-white mb-6 mt-5 w-fit"
>
  <ArrowLeft size={18} className="shrink-0" />
  <span>Back to Blogs</span>
</Link>
      <div className="max-w-4xl mx-auto px-4">

        <Image
          src={blog.image}
          alt={blog.alt}
          width={900}
          height={500}
          className="rounded-2xl mb-10"
        />

        <h1 className="text-4xl font-bold mb-6 text-white">
          {blog.title}
        </h1>

        <div className="text-sm text-gray-400 mb-6">
           • {blog.readTime}
        </div>

        {/* DESCRIPTION */}
        {blog.description?.map((para, index) => (
          <p
            key={index}
            className="text-gray-600 leading-8 mb-6"
          >
            {para}
          </p>
        ))}

        {/* POINTS */}
        {blog.points?.length > 0 && (
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            {blog.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {/* EXTRA CONTENT */}
        {blog.heading && (
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {blog.heading}
          </h2>
        )}

        {blog.paragraphs?.map((para, index) => (
          <p
            key={index}
            className="text-gray-600 leading-8 mb-6"
          >
            {para}
          </p>
        ))}

      </div>
    </section>
  );
}
