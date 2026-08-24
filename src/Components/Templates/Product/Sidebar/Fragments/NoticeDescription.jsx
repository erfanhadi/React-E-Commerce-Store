import { BiInfoCircle } from "react-icons/bi";

const NoticeDescription = () => {
  return (
    <div className="text-xs bg-yellow-600/8 rounded-l-lg border-r-3 text-yellow-600 p-5 flex items-start gap-4">
      <BiInfoCircle className="text-6xl! max-h-max!" />
      <p>
        به دلیل نوسانات ارزی، لغو سفارش برای این کالا (کالای سفارشی) ، به دلیل
        انصراف از خرید میسر نمی‌باشد.
      </p>
    </div>
  );
};

export default NoticeDescription;
