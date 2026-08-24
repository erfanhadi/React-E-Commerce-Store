import React from "react";
import { useParams } from "react-router";
import BlogBanner from "../Components/Templates/Blog/Banner";
import Title from "../Components/Templates/Blog/Title";
import Content from "../Components/Templates/Blog/Content";
import { LONG_TEXT } from "../lib/constants";
import RelatedBlogs from "../Components/Templates/Blog/RelatedBlogs";
import Comments from "../Components/Templates/Blog/Comments";

const BlogPage = () => {
  const { blogID } = useParams();
  return (
    <main id="blog-page" className="grid grid-cols-12 gap-10 my-10 container">
      <div id="content" className="col-span-9">
        <BlogBanner
          imageSrc="/assets/static/blog.jpg"
          alt="بهترین سرخ کن بدون روغن"
          //   author={{
          // name: "RadFront",
          //   src: "/assets/server/author.jpg"
          // }}
        />

        <div className="space-y-10">
          <Title text="شیائومی ۱۷ اولترا و پشتیبانی از اتصال ماهواره ای!؟" />
          <Content text={LONG_TEXT} />
          <RelatedBlogs />
          <Comments />
        </div>
      </div>
      <div id="sidebar" className="col-span-3">
      </div>
    </main>
  );
};

export default BlogPage;
