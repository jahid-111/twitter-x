"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";

const Modal = ({ children, modalClassName, modalTitle }) => {
  const router = useRouter();

  const modalRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const onHide = useCallback(() => {
    router.back();
  }, [router]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    setMounted(true);
    const dialog = modalRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <div className={`${modalClassName}`}>
      <dialog
        ref={modalRef}
        onClose={onHide}
        aria-modal="true"
        className="fixed inset-0 flex items-center justify-center h-full w-full bg-gray-800 bg-opacity-50"
      >
        <div className="h-auto w-full sm:w-9/12 md:w-6/12 xl:w-5/12 bg-black text-gray-200 p-2 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{modalTitle}</h3>
            <button
              onClick={onHide}
              aria-label="Close modal"
              className="hover:text-gray-400 rounded-full p-1"
            >
              <HiOutlineXMark size={24} />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </dialog>
    </div>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
