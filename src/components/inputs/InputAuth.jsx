import React from 'react';

function InputAuth({ type, placeholder }) {
  return (
    <div className="my-10">
      <input
        type={type}
        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-300 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputAuth;
