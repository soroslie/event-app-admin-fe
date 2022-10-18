import React from 'react';

function SelectEntriesTable({
  name,
  defaultValue,
  onChange,
  data,
}) {
  return (
    <div className="my-1">
      <label htmlFor={name}>
        <select
          defaultValue={defaultValue}
          onChange={onChange}
          name={name}
          id={name}
          className="cursor-pointer capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:border-orange-300 focus:outline-none w-full p-2.5 "
        >
          {data.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectEntriesTable;
