"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";

const Modal = ({
  Trigger,
  children,
  title,
  className,
  isOpen,
  onOpenChange,
}) => {
  const close = () => onOpenChange?.(false);
  const toggle = () => onOpenChange?.(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {Trigger && <div onClick={toggle}>{Trigger}</div>}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div onClick={close} className="absolute inset-0 bg-black/50" />

        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "relative bg-white rounded-lg shadow-xl   max-w-lg w-full mx-4 flex flex-col max-h-[90vh] overflow-hidden",
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
            className
          )}
        >
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 shrink-0">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={close}
                className="text-zinc-500 hover:text-zinc-700 transition"
              >
                <HiX className="size-6" />
              </button>
            </div>
          )}

          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export const ModalContent = ({ children, className }) => {
  return <div className={clsx("px-6 py-4", className)}>{children}</div>;
};

export default Modal;
