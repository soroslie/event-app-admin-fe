import React from 'react';

function SideBarButton({ onClick, title }) {
  return (
    <button
      onClick={onClick}
      className="uppercase bg-gradient-to-tr font-bold from-orange-400 to-orange-600 px-4 rounded-lg text-white flex items-center text-center justify-center gap-4 text-sm py-3 my-2"
      type="button"
    >
      {title}
    </button>
  );
}

export default SideBarButton;
