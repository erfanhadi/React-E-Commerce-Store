import {price_formatter} from "../../../../../lib/helpers.js";

const Price = ({ price = 10_750_000 }) => {
  return (
    <div className="flex gap-1 items-center justify-end">
      <span className="text-xl text-slate-700 font-bold">
        <strong>{price_formatter.format(price)}</strong>
      </span>
      <span className="text-sm font-bold text-slate-700">تومان</span>
    </div>
  );
};

export default Price;
