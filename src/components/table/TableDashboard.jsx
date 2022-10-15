/* eslint-disable dot-notation */
import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';

function TableDashboard({
  tableHeaders, tableBody, isLoading, editHandler, addHandler,
}) {
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
                <th key={item.id} scope="col" className="py-3 px-6">
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
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="flex justify-between iems-center pb-4">
        <div className="relative mt-4 ml-4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
          </div>
          <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
        {addHandler && (<div className="mr-4 mt-4"><AddButton /></div>
        )}

      </div>
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
              {editHandler && (
              <th>
                <EditButton onClick={() => editHandler(item.id)} />
              </th>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDashboard;
