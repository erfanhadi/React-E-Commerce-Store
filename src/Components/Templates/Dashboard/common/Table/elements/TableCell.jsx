import clsx from "clsx";
import React from "react";

const TableCell = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "flex-1 px-3 shrink text-sm text-start", className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TableCell;
