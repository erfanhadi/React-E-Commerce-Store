import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router";

export function EmptyBasket() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">سبد خرید شما</h1>
        <span className="text-muted-foreground">0 محصول</span>
      </div>

      <div className="bg-background border border-slate-200 rounded-lg p-12 flex flex-col items-center justify-center min-h-[400px]">
        <div className="bg-muted rounded-full p-6 mb-6">
          <FaShoppingBasket className="w-16 h-16 text-muted-foreground" />
        </div>

        <h2 className="text-xl font-semibold mb-2">سبد خرید شما خالی است</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-md">
          می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید
        </p>

        <div className="flex gap-4 *:px-3.5 *:py-1.5 *:rounded-lg">
          <Link to={"/products"} className="text-white bg-blue-600 hover:bg-blue-700">
            مشاهده محصولات
          </Link>
          <Link to={"/"} >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  )
}
