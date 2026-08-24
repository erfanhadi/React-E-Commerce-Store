import React from "react";
import DropdownContainer from "./DropdownContainer";

const Dropdown = ({ Trigger, children, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handler = {
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false),
  };
  return (
    <DropdownContainer {...handler}>
      <div name="dropdown-trigger cursor-pointer">{Trigger}</div>
      <div
        name="dropdown"
        className={`${className} w-40 bg-white! flex flex-col! gap-0! overflow-hidden z-5 rounded-lg primary-border shadow-md absolute top-[60%] duration-500 transition-all 
          ${
          isOpen ? "menu-opened" : "opacity-0 invisible"
        }`}
      >
        {children}
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
