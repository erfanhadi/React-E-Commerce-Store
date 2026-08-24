import React from "react";

const Farsi = ({ onToggle }) => {
  return (
    <button
      onClick={() => {
        onToggle();
        localStorage.setItem("lang", "fa");
      }}
    >
      <span>فارسی</span>
      <img src="/assets/static/iran-flag.png" className="w-6" alt="" />
    </button>
  );
};

export default Farsi;
