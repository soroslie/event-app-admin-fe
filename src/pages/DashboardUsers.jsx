import React from 'react';
import { useGetUsersQuery } from '../store/slices/apiSlice';
import { userTableHeader } from '../constants/tableHeader';
import DashBoardContent from '../components/layout/DashBoardContent';
import TableData from '../components/table/TableData';

function DashboardUsers() {
  const {
    data: userList,
    error: errorUserList,
    isLoading: loadingUserList,
  } = useGetUsersQuery();

  return (
    <DashBoardContent title="Manage User">
      <TableData
        title="user"
        tableHeaders={userTableHeader}
        tableBody={!loadingUserList && !errorUserList && userList.data}
        isLoading={loadingUserList}
      />
    </DashBoardContent>
  );
}

export default DashboardUsers;
