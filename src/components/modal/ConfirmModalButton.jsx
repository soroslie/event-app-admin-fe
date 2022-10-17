import React from 'react';

function ConfirmModalButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      data-modal-toggle="defaultModal"
      type="button"
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase"
    >
      confirm
    </button>
  );
}

export default ConfirmModalButton;
