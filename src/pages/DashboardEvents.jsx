import React from 'react';
import PageHeader from '../components/PageHeader';
import { useGetEventsQuery } from '../store/slices/apiSlice';
import TableDashboard from '../components/table/TableDashboard';
import { eventTableHeader } from '../constants/tableHeader';

function DashboardEvents() {
  const {
    data: userList,
    error: errorUserList,
    isLoading: loadingUserList,
  } = useGetEventsQuery();
  if (!loadingUserList) {
    console.log(userList.data);
  }
  return (
    <>
      <PageHeader title="Manage User" />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="flex justify-between items-center pb-4">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
        </div>
        {!loadingUserList && !errorUserList && (
          <TableDashboard
            tableHeaders={eventTableHeader}
            tableBody={userList.data}
            isLoading={loadingUserList}
          />
        )}
      </div>
    </>
  );
}

export default DashboardEvents;
