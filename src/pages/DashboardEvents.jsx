import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useLazyGetEventsQuery } from '../store/slices/apiSlice';
import TableDashboard from '../components/table/TableDashboard';
import { eventTableHeader } from '../constants/tableHeader';

function DashboardEvents() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    search: '',
    sort: 'ASC',
    sortBy: 'name',
    limit: 10,
  });
  const [event, setEvent] = useState({
    data: [],
    error: '',
    isLoading: true,
  });

  const [getData, { isFetching }] = useLazyGetEventsQuery();
  useEffect(() => {
    getData({
      search: query.search, limit: query.limit, sort: query.sort, sortBy: query.sortBy,
    }).unwrap()
      .then((item) => {
        setEvent({
          data: item,
          isLoading: false,
          error: '',
        });
      }).catch((error) => {
        setEvent({
          data: [],
          isLoading: false,
          error,
        });
      });
  }, [query]);

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
    setQuery({ ...query, search: e.target.value });
  };

  const onEditHandler = (id) => {
    navigate(`/event/${id}`);
  };

  const onAddHandler = () => {
    navigate('/event');
  };

  return (
    <>
      <PageHeader title="Manage Event" />
      <TableDashboard
        title="event"
        tableHeaders={eventTableHeader}
        tableBody={!event.isLoading && !event.error && event.data.data}
        isLoading={isFetching}
        editHandler={onEditHandler}
        addHandler={onAddHandler}
        searchHandler={onSearchHandler}
        onSortHandler={onSortHandler}
      />
    </>
  );
}

export default DashboardEvents;
