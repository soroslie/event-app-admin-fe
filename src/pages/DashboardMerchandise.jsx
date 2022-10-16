import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashBoardContent from '../components/layout/DashBoardContent';
import TableData from '../components/table/TableData';
import { selectMerchandiseSortBy } from '../constants/selectData';
import { merchandiseTableHeader } from '../constants/tableHeader';
import { useLazyGetMerchandisesQuery } from '../store/slices/apiSlice';

function DashboardMerchandise() {
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

  const [getData, { isFetching }] = useLazyGetMerchandisesQuery();
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

  const onEditHandler = () => {
  };

  const onAddHandler = () => {
  };
  return (
    <DashBoardContent title="Manage Merchandise">
      <TableData
        title="merchandise"
        tableHeaders={merchandiseTableHeader}
        tableBody={!event.isLoading && !event.error && event.data.data}
        isLoading={isFetching}
        editHandler={onEditHandler}
        addHandler={onAddHandler}
        searchHandler={onSearchHandler}
        onSortHandler={onSortHandler}
        sortByData={selectMerchandiseSortBy}
      />
    </DashBoardContent>
  );
}

export default DashboardMerchandise;
