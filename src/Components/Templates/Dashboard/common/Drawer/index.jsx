import clsx from "clsx";
import React, { useEffect } from "react";
import { HiX } from "react-icons/hi";

const Drawer = ({
  Trigger,
  children,
  title,
  className,
  isOpen = false,
  onClose,
}) => {
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

  const handleClose = () => onClose?.();
  const handleToggle = () => onClose?.();

  return (
    <>
      {Trigger && <div onClick={handleToggle}>{Trigger}</div>}

      <div
        onClick={handleClose}
        className={clsx(
          "fixed inset-0 z-50 transition-opacity duration-500 bg-black/30",
          isOpen ? "opacity-100" : "opacity-0 invisible"
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "absolute inset-y-0 overflow-auto right-0 w-full max-w-md bg-white transition-transform duration-500",
            isOpen ? "translate-x-0" : "translate-x-full",
            className
          )}
        >
          {title && (
            <div className="flex items-center justify-between border-b border-zinc-200 p-4">
              <p className="font-medium">{title}</p>
              <button onClick={handleClose} className="text-zinc-600">
                <HiX className="size-6" />
              </button>
            </div>
          )}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;