import React, { ReactNode } from "react";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onConfirm,
  onClose,
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div
            className="bg-white rounded-lg p-8 z-50"
            onClick={handleModalContentClick}
          >
            {children ? (
              children
            ) : (
              <>
                <h2 className="text-xl text-black font-bold mb-4">Confirm</h2>
                <p className="mb-4 text-black">Are you sure?</p>
              </>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                onClick={onConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
