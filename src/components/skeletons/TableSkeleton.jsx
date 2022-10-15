import React from 'react';

function TableSkeleton({ tableHeaders }) {
  return (

    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          {tableHeaders.map(() => (
            <th scope="col" className="py-3 px-6">
              <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4" />
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
                  <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4" />
                </div>
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableSkeleton;
