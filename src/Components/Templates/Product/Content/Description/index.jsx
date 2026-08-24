import React from "react";
import { LONG_TEXT } from "../../../../../lib/constants";
import FullReadContainer from "./Fragments/FullReadContainer";

const Description = () => {
  return (
    <div className="space-y-8">
      <h4 className="text-lg text-slate-700 font-black">توضیحات محصول</h4>

      <FullReadContainer isOpen={false} onToggle={() => {}}>
        <div className="text-sm text-justify text-slate-700 font-normal">
          {LONG_TEXT}
          <br />
          <br />
          {LONG_TEXT}
          <br />
          <br />
          {LONG_TEXT}
        </div>
      </FullReadContainer>
    </div>
  );
};

export default Description;
