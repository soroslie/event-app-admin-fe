import React from 'react';
import Spinner from '../Spinner';

function PrimarryButton({ title, onClick, isLoading }) {
  return (
    isLoading ? <Spinner /> : (
      <button
        onClick={onClick}
        type="submit"
        className="inline-block rounded-md px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out w-full"
      >
        {title}
      </button>
    )

  );
}

export default PrimarryButton;
