import React from "react";
import ModalFooter from "../Modal/ModalFooter";

const DeleteProductModal = ({ onClose }) => {
  return (
    <>
      {/* Content */}
      <div className="space-y-3 py-10">
        <div className="text-center space-y-2">
          آیا از حذف کردن این محصول اطمینان دارید؟
        </div>
      </div>

      {/* Footer */}
      <ModalFooter>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-md bg-red-500/10 text-red-600 duration-150 ‌font-normal hover:bg-red-500/20 "
        >
          انصراف
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-md bg-red-500 text-white duration-150 ‌font-normal hover:opacity-90"
        >
          تائید
        </button>
      </ModalFooter>
    </>
  );
};
export default DeleteProductModal;
