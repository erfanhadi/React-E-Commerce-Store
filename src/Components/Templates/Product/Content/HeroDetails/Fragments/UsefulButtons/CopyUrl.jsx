import { FaShare } from "react-icons/fa6";
import Tooltip from "../../../../../../Ui/Tooltip";
import { useState } from "react";

const CopyUrl = () => {

  const [isCopied , setIsCopied] = useState(false);

  const copyUrl = () => {
    const origin = location.origin;
    const pathName = location.pathname;
    const url = origin + pathName;

    navigator.clipboard.writeText(url);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  }

  return (
    <Tooltip text={`${isCopied ? "کپی شد✅" : "اشتراک گذاری"}`}>
      <button className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all active:*:text-sm flex-center border border-neutral-300
      rounded-lg text-slate-700" onClick={copyUrl}>
        <FaShare />
      </button>
    </Tooltip>
  );
};

export default CopyUrl;
