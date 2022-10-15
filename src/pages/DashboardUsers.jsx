import React from 'react';
import PageHeader from '../components/PageHeader';
import { useGetUsersQuery } from '../store/slices/apiSlice';
import TableDashboard from '../components/table/TableDashboard';
import { userTableHeader } from '../constants/tableHeader';

function DashboardUsers() {
  const {
    data: userList,
    error: errorUserList,
    isLoading: loadingUserList,
  } = useGetUsersQuery();

  return (
    <>
      <PageHeader title="Manage User" />
      <TableDashboard
        tableHeaders={userTableHeader}
        tableBody={!loadingUserList && !errorUserList && userList.data}
        isLoading={loadingUserList}
      />
    </>
  );
}

export default DashboardUsers;
