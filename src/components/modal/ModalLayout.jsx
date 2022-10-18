import React from 'react';

function ModalLayout({ title, children }) {
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      className="bg-backdrop overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen inset-0 h-modal h-sreen flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-2xl h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="p-4 rounded-t border-b text-center">
            <h3 className="text-xl capitalize font-semibold text-gray-900 ">{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
