import React from "react";

const PageLabel = ({label}) => {
  return (
    <div className={`w-full  before:mx-auto h-px flex text-zinc-500 items-center justify-center text-sm  primary-border relative`}>
        <span className="absolute px-14 bg-zinc-50">
            {label}
        </span>
    </div>
  );
};

export default PageLabel;
