import React from "react";
import Variant from "./Variant";

const ProductVariants = () => {
  return (
    <div className="space-y-3">
      <p className="text-xs font-black text-slate-600">ویژگی‌ها:</p>

      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({length: 6}).map((variant) => <Variant />)}
      </div>
    </div>
  );
};

export default ProductVariants;
