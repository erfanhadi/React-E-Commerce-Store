import { FaComment } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import Tooltip from "../../../../../../Ui/Tooltip";
import { useEffect } from "react";

const FocusOnComments = () => {
  const location = useLocation();

  useEffect(()=>{
    const hash = location.hash;
    
    if (hash){
      const element = document.querySelector(hash);

      element.scrollIntoView({
        behavior: "smooth",
      });
    }

  }, [location]);

  return (
    <Tooltip text={"نظرات کاربران"}>
      <Link 
      to="#product-comments"
      className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all 
      active:*:text-sm flex-center border border-neutral-300 rounded-lg text-sky-600">
        <FaComment />
      </Link>
    </Tooltip>
  );
};

export default FocusOnComments;
