import React from 'react';
import IconEdit from '../../assets/icons/IconsEdit';

function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <IconEdit color="#fff" size="14" />
    </button>
  );
}

export default EditButton;
