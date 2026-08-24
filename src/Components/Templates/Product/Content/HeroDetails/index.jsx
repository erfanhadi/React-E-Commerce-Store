import ProductColors from "./Fragments/ProductColors";
import ProductVariants from "./Fragments/ProductVariants";
import UsefulButtons from "./Fragments/UsefulButtons";

const HeroDetails = ({ product }) => {
  return (
    <>
      <section id="product-hero-details">
        <div className="col-span-6 w-full">
          <div className="flex items-center mb-10 justify-end">
            <UsefulButtons />
          </div>
          <div className="grid grid-cols-2 items-start">
            <div className="h-[450px]">
              <img
                src="/assets/static/product1.png"
                alt="Product"
                className="size-full"
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="font-bold text-slate-800">
                    مانیتور گیمینگ ایسوس مدل VY279HGR سایز 27 اینچ
                  </h1>
                  <p className=" text-slate-500 text-xs">
                    Galaxy A06 4GB 64GB 2Sim Mediatek MT6769 Helio G85 (12
                    نانومتری) 50 مگاپیکسل 5000mAh 6.7 Inch Android 14
                  </p>
                </div>

                <ProductColors />
              </div>

              <ProductVariants />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroDetails;
