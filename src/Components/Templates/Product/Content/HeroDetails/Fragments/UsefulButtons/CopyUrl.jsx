import { FaShare } from "react-icons/fa6";
import Tooltip from "../../../../../../Ui/Tooltip";

const CopyUrl = () => {
  return (
    <Tooltip>
      <button className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all active:*:text-sm flex-center border border-neutral-300 rounded-lg text-slate-700">
        <FaShare />
      </button>
    </Tooltip>
  );
};

export default CopyUrl;
