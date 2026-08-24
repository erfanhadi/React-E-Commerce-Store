import React from "react";
import SectionTitle from "../../../Common/SectionTitle";
import ProductCard from "../../../Common/Cards/ProductCard";

const BestSelling = () => {
  return (
    <section className="container my-[50px]">
      <SectionTitle text="پرفروش‌ترین ها" />
      <div className="mt-10 w-full border rounded-2xl grid grid-cols-5 p-4 border-neutral-300 divide-x divide-neutral-200 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default BestSelling;
