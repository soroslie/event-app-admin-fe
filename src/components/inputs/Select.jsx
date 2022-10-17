import React from 'react';

function Select({
  title,
  name,
  defaultValue,
  onChange,
  data,
  error,
  isLoading,
}) {
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
        <select
          defaultValue={defaultValue}
          onChange={onChange}
          name={name}
          id={name}
          className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:border-orange-300 focus:outline-none w-full p-2.5 "
        >
          {data.map((item) => (
            <option className="capitalize" key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
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

export default Select;
