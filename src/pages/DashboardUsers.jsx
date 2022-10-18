import React, { useState } from 'react';
import { useGetUsersQuery } from '../store/slices/apiSlice';
import { userTableHeader } from '../constants/tableHeader';
import DashBoardContent from '../components/layout/DashBoardContent';
import TableData from '../components/table/TableData';
import { selectUserSortBy } from '../constants/selectData';

function DashboardUsers() {
  const [query, setQuery] = useState({
    search: '',
    sort: 'ASC',
    sortBy: 'name',
    limit: 10,
  });

  const {
    data: userList,
    error: errorUserList,
    isFetching: loadingUserList,
  } = useGetUsersQuery({
    search: query.search, limit: query.limit, sort: query.sort, sortBy: query.sortBy,
  });

  const onSortHandler = (e) => {
    if (e.target.name === 'limit') {
      setQuery({ ...query, limit: e.target.value });
    }
    if (e.target.name === 'sort') {
      setQuery({ ...query, sort: e.target.value });
    }
    if (e.target.name === 'sortBy') {
      setQuery({ ...query, sortBy: e.target.value });
    }
  };

  const onSearchHandler = (e) => {
    const delayDebounceFn = setTimeout(() => {
      setQuery({ ...query, search: e.target.value });
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  };

  return (
    <DashBoardContent title="manage user">
      <TableData
        title="user"
        tableHeaders={userTableHeader}
        tableBody={!loadingUserList && !errorUserList && userList.data}
        isLoading={loadingUserList}
        isError={errorUserList}
        searchHandler={onSearchHandler}
        searchAbleData="user email"
        onSortHandler={onSortHandler}
        sortByData={selectUserSortBy}
      />
    </DashBoardContent>
  );
}

export default DashboardUsers;
