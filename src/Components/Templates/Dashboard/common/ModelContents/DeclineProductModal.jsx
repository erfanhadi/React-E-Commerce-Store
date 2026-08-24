import React from "react";
import ModalFooter from "../Modal/ModalFooter";

const DeclineProductModal = ({onClose}) => {
  return (
    <>
      <div className="py-10 text-center space-y-2">
        <p>آیا از رد کردن این محصول اطمینان دارید؟</p>
      </div>
      <ModalFooter>
        <button onClick={onClose}  className="px-4 py-2 rounded-md bg-red-500/10 text-red-600 duration-150 ‌font-normal hover:bg-red-500/20 ">انصراف</button>
        <button onClick={onClose}  className="px-4 py-2 rounded-md bg-red-500 text-white duration-150 ‌font-normal hover:opacity-90">تائید</button>
      </ModalFooter>
    </>
  );
};

export default DeclineProductModal;
