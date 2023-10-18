import React from 'react';

function Modal ({ isOpen, onClose, gifUrl }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <img src="https://giphy.com/embed/tPKoWQJk3cEbC" alt="GIF" />
        </div>
      </div>
    )
  );
}

export default Modal;

