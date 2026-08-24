import React from "react";

const PersonalizationInput = ({ label = "", placeholder, isLTR = false, onChange, value , type}) => {
  const id = crypto.randomUUID();

  const handleChange = e => {
        onChange?.(e.target.value)
  }

  return (
    <div>
      <label htmlFor={`field-${id}`} className="text-xs select-none text-zinc-500 font-medium">
        {label}
      </label>
      <div className="mt-2 w-full">
        <input
            onCanPlay={handleChange}
          type={type || "text"}
          className="w-full h-10 bg-zinc-50 primary-border rounded-md outline-none! duration-150 focus-within:ring-4 focus-within:ring-blue-500/40 px-4"
          id={`field-${id}`}
          placeholder={placeholder}
          dir={isLTR ? "ltr" : "rtl"}
        />
      </div>
    </div>
  );
};

export default PersonalizationInput;
