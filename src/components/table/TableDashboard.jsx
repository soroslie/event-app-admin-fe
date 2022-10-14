/* eslint-disable dot-notation */
import React from 'react';

function TableDashboard({ tableHeaders, tableBody, isLoading }) {
  if (isLoading) {
    return (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {tableHeaders.map((item) => (
              <th scope="col" className="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableHeaders.map((item) => (
            <tr className="bg-white border-b 0 hover:bg-gray-50 ">
              {tableHeaders.map((key) => (
                <th scope="col" className="py-3 px-6">
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          {tableHeaders.map((item) => (
            <th scope="col" className="py-3 px-6">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((item) => (
          <tr className="bg-white border-b 0 hover:bg-gray-50 ">
            {Object.keys(item).map((key) => (
              key !== 'id' && key !== 'deleted_at' ? (
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  {item[key]}
                </th>
              ) : null
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableDashboard;
