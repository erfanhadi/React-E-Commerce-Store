import { HiTrash } from "react-icons/hi2";

const ClearBasket = () => {
  return (
    <button className="rounded-md  flex-center px-3 py-2  gap-1 hover:bg-red-500/10 text-red-500">
      <HiTrash />
      <span className="text-sm font-semibold">پاکسازی سبد خرید</span>
    </button>
  );
};

export default ClearBasket;
