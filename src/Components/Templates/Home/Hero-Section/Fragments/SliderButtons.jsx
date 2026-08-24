import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SliderButtons = () => {
  return (
    <div className="absolute bottom-5 z-560! left-5 *:size-10 *:border *:border-neutral-300 *:flex-center *:bg-white *:rounded-full *:text-black *:cursor-pointer *:duration-150 *:active:scale-95 *:hover:opacity-90 *:text-2xl flex-ic gap-1">
      <button>
        <BiChevronRight />
      </button>
      <button>
        <BiChevronLeft />
      </button>
    </div>
  );
};

export default SliderButtons;
