import React from "react";

const CurrentLanguage = ({ lang = "fa", onToggle }) => {
  return (
    <div
      className="flex h-8 px-4 text-sm cursor-pointer bg-white rounded-md primary-border items-center gap-2"
      onClick={() => {
        onToggle();
      }}
    >
      <span>
        {lang == "fa" ? "فارسی" : "انگلیسی"}
      </span>
      <img src={`/assets/static/${lang == "fa" ? "iran" : "en"}-flag.png`}className="w-6" alt="" />
    </div>
  );
};

export default CurrentLanguage;
