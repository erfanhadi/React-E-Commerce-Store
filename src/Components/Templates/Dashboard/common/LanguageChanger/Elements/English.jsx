import React from "react";

const English = ({ onToggle }) => {
  return (
    <button
      onClick={() => {
        onToggle();
        localStorage.setItem("lang", "en");
      }}
    >
      <span>انگلیسی</span>
      <img src="/assets/static/en-flag.png" className="w-6" alt="" />
    </button>
  );
};

export default English;
