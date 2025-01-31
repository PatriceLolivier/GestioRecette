import React from "react";
import { IModalProps } from "@atomes/Modal";
import { Button } from "@atomes/Button";
import { FaTimes } from "react-icons/fa";

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="bg-white rounded-lg p-6 z-10 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button
            onClick={onClose}
            className="p-1 hover:text-gray-700"
          >
            <FaTimes size={20} />
          </Button>
        </div>
        
        <div className="mb-6">
          {children}
        </div>

        {footer && (
          <div className="flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
