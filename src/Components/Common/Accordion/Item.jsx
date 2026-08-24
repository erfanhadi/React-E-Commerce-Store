import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

const AccordionItem = ({ label, content }) => {
  const [isOpen , setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div
        onClick={toggleIsOpen}
        className={`flex-between select-none h-12 text-sm px-4 flex-ic duration-300 hover:bg-slate-50 active:*:scale-95 min-h-20 group cursor-pointer`}
        tabIndex="1"
      >
        <div className="duration-300 cursor-pointer w-full">{label}</div>
        <BiChevronLeft />
      </div>
      <div className={`duration-300 transition-all text-sm  text-slate-500`}>
        {isOpen && content}
      </div>
    </div>
  );
};

export default AccordionItem;
