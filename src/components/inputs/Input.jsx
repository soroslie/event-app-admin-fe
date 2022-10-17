import React from 'react';

function Input({
  title,
  name,
  type,
  value,
  onChange,
  placholder,
  disabled,
  error,
  isLoading,
  min,
}) {
  let className = ' w-full p-2.5 rounded-lg text-gray-900 text-sm ';
  if (disabled) {
    className += ' cursor-not-allowed bg-gray-200 border border-gray-300 font-bold';
  } else {
    className += ' bg-gray-50 border border-gray-300 focus:bg-white focus:border-orange-300 focus:outline-none';
  }
  return (
    <div className="my-1">
      <label
        htmlFor={name}
        className="block mb-2 text-md font-medium text-gray-900 capitalize"
      >
        {title}
      </label>
      {isLoading ? (
        <div className="animate-pulse rounded-xl bg-slate-200 h-10 w-full mx-auto shadow-2xl flex items-center justify-center" />
      ) : (
        <input
          min={min}
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placholder}
          disabled={disabled}
          className={className}
        />
      )}
      <p
        className={`${
          error ? 'visible' : 'invisible'
        } text-center mt-1 text-sm text-red-500`}
      >
        {!error ? '-' : error}
      </p>
    </div>
  );
}

export default Input;
