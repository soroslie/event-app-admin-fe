import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useGetEventsQuery } from '../store/slices/apiSlice';
import TableDashboard from '../components/table/TableDashboard';
import { eventTableHeader } from '../constants/tableHeader';
import AddButton from '../components/table/AddButton';

function DashboardEvents() {
  const navigate = useNavigate();
  const {
    data: eventList,
    error: errorEventList,
    isLoading: loadingEventList,
  } = useGetEventsQuery();

  const onEditHandler = (id) => {
    navigate(`/event/${id}`);
  };

  const onAddHandler = () => {
    navigate('/event');
  };

  return (
    <>
      <PageHeader title="Manage Event" />
      {!loadingEventList && !errorEventList && (
        <TableDashboard
          tableHeaders={eventTableHeader}
          tableBody={eventList.data}
          isLoading={loadingEventList}
          editHandler={onEditHandler}
          addHandler={onAddHandler}
        />
      )}
    </>
  );
}

export default DashboardEvents;
