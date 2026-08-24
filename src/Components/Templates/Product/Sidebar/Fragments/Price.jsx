const Price = ({ price = 10_750_000 }) => {
  return (
    <div className="flex gap-1 items-center justify-end">
      <span className="text-xl text-slate-700 font-bold">
        <strong>{price}</strong>
      </span>
      <span className="text-sm font-bold text-slate-700">تومان</span>
    </div>
  );
};

export default Price;
