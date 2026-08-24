import React from "react";
import { LOREM_TEXT } from "../../../../lib/constants";
import Author from "../Banner/Author";
import { Link } from "react-router";

const RelatedBlogCard = () => {
  return (
    <article className="h-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
      <div className="h-[248px] relative">
        <img
          src="/assets/static/blog.jpg"
          className="object-cover size-full"
          alt=""
        />
        <Author name={"امین سعیدی"} src={"/assets/static/peyman-ahmadi.jpg"} />
      </div>
      <div className="p-5 mt-5 text-sm overflow-hidden relative">
        <Link className="absolute size-full" to={"/blog/BLOG_ID"} />
        <p className="line-clamp-2 font-medium text-slate-700">{LOREM_TEXT}</p>
      </div>
    </article>
  );
};

export default RelatedBlogCard;
