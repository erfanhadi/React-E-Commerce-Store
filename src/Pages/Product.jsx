import ProductComments from "../Components/Templates/Product/Content/Comments";
import Description from "../Components/Templates/Product/Content/Description";
import HeroDetails from "../Components/Templates/Product/Content/HeroDetails";
import RelatedProducts from "../Components/Templates/Product/Content/RelatedProducts";
import Sidebar from "../Components/Templates/Product/Sidebar";

const ProductPage = () => {
  // get {productID} from params !
  return (
    <main
      id="product-content"
      className="w-[95%] mx-auto grid grid-cols-8 gap-5  my-10"
    >
      <section className="col-span-6 space-y-10  *:p-5 *:border *:border-neutral-200  *:rounded-xl">
        <HeroDetails product={{}} />
        <Description />
        <RelatedProducts />
        <ProductComments />
      </section>
      <Sidebar />
    </main>
  );
};

export default ProductPage;
