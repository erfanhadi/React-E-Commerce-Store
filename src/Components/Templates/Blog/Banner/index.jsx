import React from "react";
import Author from "./Author";

const BlogBanner = ({ imageSrc, alt, author }) => {
  return (
    <div className="h-[485px] relative w-full">
      <img className="w-full rounded-md h-full" src={imageSrc} alt={alt} />

      {/* overlay */}
      <div className="absolute size-full bg-linear-to-t from-black/70 to-black/20 top-0 right-0 h-full bottom-0" />

      <Author
        name="امین سعیدی"
        id="@this_peyman"
        src="/assets/static/peyman-ahmadi.jpg"
      />
    </div>
  );
};

export default BlogBanner;
