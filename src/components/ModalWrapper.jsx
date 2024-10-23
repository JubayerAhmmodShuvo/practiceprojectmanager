import React from 'react';

function ModalWrapper({ children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;