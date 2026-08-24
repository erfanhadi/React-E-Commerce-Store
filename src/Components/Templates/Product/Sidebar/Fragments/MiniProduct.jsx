import React from "react";

const MiniProduct = () => {
  return (
    <article className="flex items-center gap-4">
      <div className="size-16.5! min-w-16.5!">
        <img
          src="/assets/static/product1.png"
          alt="Product"
          className="size-full "
        />
      </div>
      <div>
        <h3 className="text-slate-800 text-sm! line-clamp-2">
          <strong>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          </strong>
        </h3>
      </div>
    </article>
  );
};

export default MiniProduct;
