import clsx from "clsx";
import React from "react";

const ModalFooter = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-end gap-1.5  p-6 font-normal! border-t border-zinc-200 bg-zinc-50/70 shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
