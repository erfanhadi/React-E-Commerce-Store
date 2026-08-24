import React from "react";
import ModalFooter from "../Modal/ModalFooter";

const ConfirmProductModal = ({onClose}) => {
  return (
    <>
      {/* Content */}
      <div className="space-y-3 py-10">
        <div className="text-center space-y-2">
          آیا از تائید کردن این محصول اطمینان دارید؟
        </div>
      </div>

      {/* Footer */}
      <ModalFooter>
        <button onClick={onClose} className="px-4 py-2 rounded-md bg-zinc-200 text-zinc-700">
          انصراف
        </button>
        <button onClick={onClose} className="px-4 py-2 rounded-md bg-blue-500 text-white duration-150 ‌font-normal! hover:opacity-90">
          بله تائید.
        </button>
      </ModalFooter>
    </>
  );
};

export default ConfirmProductModal;
