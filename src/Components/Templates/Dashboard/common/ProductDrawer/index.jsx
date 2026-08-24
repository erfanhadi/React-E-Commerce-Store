import React from "react";
import Drawer from "../Drawer";
import ProductDrawerInput from "./ProductDrawerInput";

// mode: CREATE | EDIT
const ProductDrawer = ({
  isOpen,
  onToggle,
  initialValues,
  mode = "CREATE",
}) => {
  return (
    <Drawer
      className=""
      onClose={() => {
        onToggle();
      }}
      onToggle={() => {
        onToggle();
      }}
      isOpen={isOpen}
      title={mode == "CREATE" ? "ایجاد محصول جدید" : "ویرایش محصول"}
    >
      <div className="space-y-4 mt-5 px-6">
        <ProductDrawerInput
          label="عنوان محصول"
          placeholder={"Iphone 17 pro max 256GB SabzLe..."}
          onChange={() => {}}
        />
        <ProductDrawerInput
          label="شناسه محصول (sku)"
          placeholder="مثال: iphone-17-promax-sabz"
          onChange={() => {}}
        />
        <ProductDrawerInput
          label="درصد تخفیف (%)"
          placeholder="مثال: 50"
          onChange={() => {}}
          type="number"
        />
        <ProductDrawerInput
          label="درصد تخفیف (%)"
          placeholder="موجودی محصول (عدد)"
          onChange={() => {}}
          type="number"
        />
        <ProductDrawerInput
          label="قیمت محصول (عدد)"
          placeholder="مثال: 27,000,000"
          onChange={() => {}}
          type="number"
        />
        <ProductDrawerInput
          label="آماده سازی (روز) "
          placeholder="مثال: 2"
          onChange={() => {}}
          type="number"
        />

        <div>
          <label htmlFor="product-details"> توضیحات محصول </label>
          <textarea
            id="product-details"
            name=""
            className="w-full h-10 text-sm rounded-md outline-none primary-border px-3 mt-2 min-h-30 pt-2"
            placeholder=" آیفون - ارزان - تخفیف دار"
          ></textarea>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-2">
        <button className="px-4 py-2 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/15 ">
          انصراف
        </button>
        <button className="px-4 py-2 rounded-md bg-linear-to-t from-blue-600 text-sm to-blue-500 text-white">
          {mode == "CREATE" ? "ایجاد محصول" : "ویرایش محصول"}
        </button>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;
