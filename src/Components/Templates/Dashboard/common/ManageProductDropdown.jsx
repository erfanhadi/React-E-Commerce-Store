import React, { useState } from "react";
import { BiCheckboxChecked, BiCheckboxMinus, BiEdit } from "react-icons/bi";
import { FaEllipsisVertical, FaEye, FaTrash } from "react-icons/fa6";
import Dropdown from "../ui/Dropdown";
import DropdownItem from "../ui/Dropdown/DropdownItem";
import Modal from "./Modal";
import ConfirmProductModal from "./ModelContents/ConfirmProductModal";
import DeclineProductModal from "./ModelContents/DeclineProductModal";
import ModalFooter from "./Modal/ModalFooter";
import DeleteProductModal from "./ModelContents/DeleteProductModal";
import Drawer from "./Drawer";
import ProductDrawer from "./ProductDrawer";

const ManageProductDropdown = () => {
  const [content, setContent] = useState("CONFIRM_PRODUCT");
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Dropdown
        Trigger={
          <button className="text-lg size-10 flex items-center justify-center">
            <FaEllipsisVertical />
          </button>
        }
      >
        <DropdownItem>
          <FaEye className="text-base!" />
          <span>مشاهده محصول</span>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setContent("CONFIRM_PRODUCT");
            toggle();
          }}
        >
          <button>
            <BiCheckboxChecked className="text-xl!" />
            <span>تائید محصول </span>
          </button>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setContent("DECLINE_PRODUCT");
            toggle();
          }}
        >
          <BiCheckboxMinus className="text-xl!" />
          <span>رد محصول </span>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setContent("DELETE_PRODUCT");
            toggle();
          }}
        >
          <FaTrash className="text-base!" />
          <span>حذف محصول </span>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
          }}
        >
          <BiEdit className="text-xl!" />
          <span>ویرایش محصول </span>
        </DropdownItem>
      </Dropdown>

      <Modal
        isOpen={isOpen}
        onOpenChange={() => setIsOpen(false)}
        title="تغییر وضعیت"
      >
        {content == "CONFIRM_PRODUCT" ? (
          <ConfirmProductModal onClose={toggle} />
        ) : content == "DECLINE_PRODUCT" ? (
          <DeclineProductModal onClose={toggle} />
        ) : (
          <DeleteProductModal onClose={toggle} />
        )}
      </Modal>

      <ProductDrawer
        mode="EDIT"
        isOpen={isDrawerOpen}
        onToggle={() => setIsDrawerOpen(!isDrawerOpen)}
        initialValues={{}}
      />
    </>
  );
};

export default ManageProductDropdown;
