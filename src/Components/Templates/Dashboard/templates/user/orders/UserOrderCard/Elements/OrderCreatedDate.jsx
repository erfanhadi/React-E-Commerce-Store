import { BiCalendarWeek } from "react-icons/bi";

const OrderCreatedDate = () => {
  return (
    <div className="details-item">
      <div className="flex items-center gap-1">
        <BiCalendarWeek />
        <span>زمان ثبت:</span>
      </div>
      <p className="text-zinc-700!">22 آبان 1405</p>
    </div>
  );
};

export default OrderCreatedDate;
