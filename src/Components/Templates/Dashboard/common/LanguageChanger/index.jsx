import React, { useState } from "react";
import English from "./Elements/English";
import Farsi from "./Elements/Farsi";
import CurrentLanguage from "./Elements/CurrentLanguage";

const LanguageChanger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const systemLanguage = localStorage.getItem("lang") || "fa";

  return (
    <div className="grow flex select-none items-center justify-end w-[90%] mx-auto mb-5">
      <div className="relative">
        <CurrentLanguage onToggle={toggleMenu} lang={systemLanguage} />

        <div
          className={`${
            isOpen ? "" : "hidden invisible"
          } language-dropdown `}
        >
          <Farsi onToggle={toggleMenu} />
          <English onToggle={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default LanguageChanger;
