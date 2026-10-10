import React, { useEffect, useState } from "react";
import Drawer from "../Drawer";
import ProductDrawerInput from "./ProductDrawerInput";
import useCategories from "../../../../../lib/Hooks/useCategories";
import CascadeCategories from "./CascadeCategories";
import useProductForm from "../../../../../lib/Hooks/useProductForm";
import createProduct from "../../../../../services/product.service";
import { toast } from "sonner";

// mode: CREATE | EDIT
const ProductDrawer = ({
  isOpen,
  onToggle,
  initialValues,
  mode = "CREATE",
}) => {
  const { isLoading: categoriesIsLoading, categories } = useCategories();
  const { error, setError } = useState(null);
  const { isSubmitting, setIsSubmitting } = useState(false);
  const {
    form,
    selectedCategory,
    handleCategoryChange,
    setField,
    addSeller,
    removeSeller,
    updateSeller,
    addPair,
    removePair,
    updatePair,
    setImages,
    buildFormData,
    resetForm,
  } = useProductForm();

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    if (!form.name.trim() || !form.slug.trim() || !form.description.trim()) {
      setError("لطفا تمامی فیلد های اجباری را پر کنید");
      return;
    }

    if (!selectedCategory) {
      setError("انتخاب دسته بندی  محصول الزامی است");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createProduct(buildFormData());
      resetForm();
      toast.success("محصول با موفقیت ایجاد شد");
    } catch (err) {
      setError(err.response?.data?.messege || "خطایی رخ داده است");
    }

    setIsSubmitting(false);
  };

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
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
        />
        <ProductDrawerInput
          label="شناسه محصول (sku)"
          placeholder="مثال: iphone-17-promax-sabz"
          value={form.slug}
          onChange={(e) => setField("slug", e.target.value)}
        />
        {/* <ProductDrawerInput
          label="درصد تخفیف (%)"
          placeholder="مثال: 50"
          onChange={() => {}}
          type="number"
        /> */}
        {/* <ProductDrawerInput
          label="موجودی محصول"
          placeholder="موجودی محصول (عدد)"
          onChange={() => {}}
          type="number"
        /> */}
        {/* <ProductDrawerInput
          label="قیمت محصول (عدد)"
          placeholder="مثال: 27,000,000"
          onChange={() => {}}
          type="number"
        /> */}
        {/* <ProductDrawerInput
          label="آماده سازی (روز) "
          placeholder="مثال: 2"
          onChange={() => {}}
          type="number"
        /> */}

        <div>
          <label
            htmlFor=""
            className="text-sm font-medium text-zinc-700 mb-2 block"
          >
            دسته بندی
          </label>
          {categoriesIsLoading ? (
            <p className="text-xs text-zinc-400">
              درحال بارگذاری دسته بندی ها...
            </p>
          ) : (
            <CascadeCategories
              categories={categories}
              onChange={handleCategoryChange}
            />
          )}
        </div>

        <div>
          <label htmlFor="product-details"> توضیحات محصول </label>
          <textarea
            id="product-details"
            name=""
            className="w-full h-10 text-sm rounded-md outline-none primary-border px-3 mt-2 min-h-30 pt-2"
            placeholder=" آیفون - ارزان - تخفیف دار"
            value={form.description}
            onChange={(e) => setField("description", e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-2">
        <button className="px-4 py-2 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/15 ">
          انصراف
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-4 py-2 rounded-md bg-linear-to-t from-blue-600 text-sm to-blue-500 text-white"
        >
          {isSubmitting ? "درحال ثبت..." : "ایجاد محصول"}
        </button>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;
