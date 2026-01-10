import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  });

  if (!open) return null;
  return createPortal(
    <>
      <div
        className="modal-overlay"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      ></div>
      <div
        className="modal"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <span className="close-modal" onClick={onClose}>
          x
        </span>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
