import React from "react";
import AccordionItem from "./Item";

const Accordion = ({ options }) => {
  return (
    <div className="border rounded-lg  divide-y divide-slate-300 border-slate-300 overflow-hidden w-full mx-auto">
      {options.map((opt) => {
        return <AccordionItem {...opt} key={opt.id} />;
      })}
    </div>
  );
};

export default Accordion;
