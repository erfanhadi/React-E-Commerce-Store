import React, { useState } from "react";

const ColorOption = ({color = "#000", label = "مشکی", onSelect}) => {
    const [selectedColor, setSelectedColor] = useState("#000")

  const handleSelect = (e) => { 
    const colorCode = (e.target.dataset.color);
    onSelect?.(colorCode)
  };

  return (
    <div
      data-color="#000"
      onClick={handleSelect}
      className={`p-1 h-10 rounded-lg border border-slate-200 flex-ic gap-2 text-xs cursor-pointer ${color == selectedColor ? "border-blue-500!" : ""}`}
    >
      <div className="size-6  border rounded-md border-slate-200 flex-center">
        <div className="size-4 bg-black rounded-sm"></div>
      </div>
      <p>
        {label}
      </p>
    </div>
  );
};

export default ColorOption;
