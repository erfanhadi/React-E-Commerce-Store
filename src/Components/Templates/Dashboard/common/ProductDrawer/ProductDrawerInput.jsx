import React from "react";

const ProductEditInput = ({
  label,
  onChange,
  value,
  placeholder,
  className,
  ...props
}) => {
  const id = crypto.randomUUID();
  return (
    <div>
      <label htmlFor={`unique-input-${id}`}>{label}</label>

      <input
        id={`unique-input-${id}`}
        {...props}
        className="w-full h-10 text-sm rounded-md outline-none primary-border px-3 mt-2"
        placeholder={placeholder || "لطفا این فیلد را تکمیل نمائید.."}
      />
    </div>
  );
};

export default ProductEditInput;
