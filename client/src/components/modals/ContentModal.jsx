import { X } from "lucide-react";
import React from "react";

export const ContentModal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  const handleClick = () => {
    closeModal();
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-accent/20 transition-all duration-300 ease-in-out">
      <div className="w-fit rounded-lg bg-white p-2 shadow-lg">
        <div className="flex h-8 w-full justify-end">
          <button
            onClick={handleClick}
            className={
              "group flex h-5 w-5 items-center justify-center rounded bg-background transition-all duration-300 ease-in-out hover:bg-red-500"
            }
          >
            <X className="group-hover:text-white" />
          </button>
        </div>
        <div className="flex max-h-[90vh] flex-col items-center justify-center gap-2 overflow-y-auto px-1 pt-6">
          {children}
        </div>
      </div>
    </section>
  );
};
