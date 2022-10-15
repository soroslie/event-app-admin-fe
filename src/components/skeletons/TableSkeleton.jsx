import React from 'react';

function TableSkeleton({ tableHeaders }) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="flex justify-between iems-center pb-4">
        <div className="relative mt-4 ml-4">
          <div className="h-8 p-2 pl-10 w-80 bg-gray-200 rounded-lg dark:bg-gray-700" />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {tableHeaders.map((item) => (
              <th scope="col" className="py-3 px-6">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableHeaders.map(() => (
            <tr className="bg-white border-b 0 hover:bg-gray-50 ">
              {tableHeaders.map(() => (
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
    </div>
  );
}

export default TableSkeleton;
