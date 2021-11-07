import React from 'react';

export default function Dialog({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
}
