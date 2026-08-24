import Checkout from "../Components/Templates/Cart/Checkout";
import CartProduct from "../Components/Templates/Cart/Content/Fragments/CartProduct";
import CartTitle from "../Components/Templates/Cart/Content/Fragments/CartTitle";
import ClearBasket from "../Components/Templates/Cart/Content/Fragments/ClearBasket";
import { EmptyBasket } from "../Components/Templates/Cart/EmptyBasket";

const CartPage = () => {
  const cartLength = 0;
  if (!cartLength) {
    return <EmptyBasket />;
  } else {
    return (
      <main id="cart-page" className="my-10 container grid grid-cols-9 gap-5">
        <div id="cart-content" className="col-span-6">
          <div className="flex-between">
            <CartTitle />
            <ClearBasket />
          </div>

          <div id="cart-products-container" className=" space-y-4 mt-2">
            {Array.from({ length: 3 }).map((product, index) => (
              <CartProduct {...product} />
            ))}
          </div>
        </div>
        <Checkout />
      </main>
    );
  }
};

export default CartPage;
