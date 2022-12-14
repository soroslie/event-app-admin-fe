import React from 'react';
import IconEdit from '../../assets/icons/IconsEdit';

function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="tooltip text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
    >
      <IconEdit color="#fff" size="14" />
      <span className="tooltiptext">Edit</span>
    </button>
  );
}

export default EditButton;
