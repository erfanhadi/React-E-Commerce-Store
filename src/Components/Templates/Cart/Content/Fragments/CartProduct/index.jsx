import React from "react";
import Title from "./Elements/Title";
import Variants from "./Elements/Variants";
import Entity from "./Elements/Entity";

const CartProduct = () => {
  return (
    <article className="w-full p-8 border rounded-xl border-slate-200  flex flex-col justify-between h-[414px]">
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="space-y-5">
          <Title text="مانیتور گیمینگ کولر مستر مدل GA2711 سایز 27 اینچ" />
          <Variants />
        </div>
        <div className="flex-center">
          <img
            src="/assets/static/product1.png"
            alt="Product"
            className="max-h-[168px]"
          />
        </div>
      </div>

      <div className="w-full flex-between px-10 h-20 rounded-xl border border-slate-200 bg-slate-50">

        {/* Product Entity  */}
        <Entity count={1} onCountChange={() => {}} />

        {/* Product Price */}
        <div>
          <div className="flex-ic gap-1">
            <p className="text-xl">
              <strong>{Number(15_000_000).toLocaleString("fa-IR")}</strong>
            </p>
            <span>تومان</span>
          </div>
        </div>
      
      </div>
    </article>
  );
};

export default CartProduct;
