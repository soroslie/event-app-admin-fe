/* eslint-disable dot-notation */
import React from 'react';
import moment from 'moment';
import StringHelper from '../../helper/stringHelper';
import TableSkeleton from '../skeletons/TableSkeleton';
import AddButton from './AddButton';
import EditButton from './EditButton';
import SelectEntriesTable from './SelectEntries';
import { selectShowLimit, selectSort } from '../../constants/selectData';
import ErrorCard from '../ErrorCard';

function TableData({
  title,
  searchAbleData,
  // table
  tableHeaders,
  tableBody,
  // state
  isLoading,
  isError,
  // function - input
  editHandler,
  addHandler,
  searchHandler,

  // select - input
  onSortHandler,
  sortByData,
}) {
  return (
    <div>
      <div className="lg:flex lg:justify-between items-center pb-4">
        {searchHandler && (
          <div className="relative mt-4 lg:ml-4">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              onChange={searchHandler}
              type="text"
              id="table-search"
              className="p-2 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
              placeholder={`search for ${searchAbleData}`}
            />
          </div>
        )}
        {addHandler && (
          <div className="mr-4 mt-4">
            <AddButton onClick={addHandler} title={title} />
          </div>
        )}
      </div>
      {onSortHandler && (
        <div className="lg:flex mb-3 lg:justify-between">
          <div className="flex flex-row align-middle items-center ">
            <div className="mr-2">Show</div>
            <SelectEntriesTable
              onChange={onSortHandler}
              data={selectShowLimit}
              name="limit"
            />
            <p className="ml-2">Entries</p>
          </div>
          <div className="flex flex-row align-middle items-center content-center">
            <div className="mr-2">Sort By</div>
            <SelectEntriesTable
              data={sortByData}
              onChange={onSortHandler}
              name="sortBy"
            />
            <div className="ml-2">
              <SelectEntriesTable
                data={selectSort}
                onChange={onSortHandler}
                name="sort"
              />
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        {!tableBody && !isLoading && !isError && (
          <p className="text-center w-full text-xl uppercase py-20 bg-gray-50 text-orange-400">
            No Data
          </p>
        )}
        {isLoading ? (
          <TableSkeleton tableHeaders={tableHeaders} />
        ) : (
          <table className="w-full text-sm text-left text-gray-500">
            {tableBody && (
              <>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    {Object.keys(tableBody[0]).map((key) => (key !== 'id'
                      && key !== 'deleted_at'
                      && key !== 'event_id' ? (
                        <th
                          scope="row"
                          className="py-4 px-6 text-gray-900 whitespace-nowrap"
                        >
                          {StringHelper.replaceWithSpace(key, '_')}
                        </th>
                      ) : null))}
                    {editHandler ? (
                      <th
                        scope="row"
                        className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap"
                      >
                        Action
                      </th>
                    ) : null}
                    {/* {tableHeaders.map((item) => (
              <th scope="col" className="py-3 px-6">
                {item}
              </th>
            ))} */}
                  </tr>
                </thead>
                <tbody>
                  {tableBody.map((item) => (
                    <tr className="bg-white border-b 0 hover:bg-gray-50">
                      {Object.keys(item).map((key) => (
                        key === 'start_time' ? (
                          <th
                            scope="row"
                            className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap"
                          >
                            {moment(item[key]).format('DD, MMM YYYY, HH:MM')}
                          </th>
                        )
                          : key !== 'id'
                        && key !== 'deleted_at'
                        && key !== 'event_id' ? (
                          <th
                            scope="row"
                            className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap"
                          >
                            {item[key]}
                          </th>
                            ) : null))}
                      {editHandler && (
                        <th>
                          <EditButton onClick={() => editHandler(item)} />
                        </th>
                      )}
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        )}
        {!isLoading && isError ? <ErrorCard message={isError.error} /> : null}
      </div>
    </div>
  );
}

export default TableData;
