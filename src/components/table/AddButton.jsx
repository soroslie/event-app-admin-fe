import React from 'react';
import IconAdd from '../../assets/icons/IconsAdd';

function AddButton({ onClick, title }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
    >
      Create Event
      <IconAdd size="20" color="#fff" />
    </button>
  );
}

export default AddButton;
