import { FaEye, FaEyeSlash } from "react-icons/fa6";

const FullReadContainer = ({ children, isOpen, onToggle }) => {
  const dynamicStyles = isOpen ? "h-full" : "h-40 overflow-hidden";

  return (
    <div
      id="product-description"
      className={`transition-all duration-150 relative ${dynamicStyles}`}
    >
      {children}

      {isOpen ? (
        <div className="flex items-center mt-10 justify-end">
          <button
            onClick={onToggle}
            className="px-3 py-1.5 text-xs bg-slate-700 text-white flex-center gap-2 ring-slate-500/50 focus-within:ring-4!"
          >
            <FaEyeSlash />
            <span>خلاصه سازی</span>
          </button>
        </div>
      ) : (
        <div className="absolute transition-all duration-150 size-full bottom-0 right-0 bg-linear-to-t from-white from-50% flex items-end justify-center pb-5">
          <button
            onClick={onToggle}
            className="px-3 py-1.5 bg-slate-700 text-white flex-center gap-2 ring-slate-500/50 focus-within:ring-4!"
          >
            <FaEye />
            <span className="text-xs">خواندن کامل</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FullReadContainer;
