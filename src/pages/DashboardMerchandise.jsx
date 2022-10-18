import React, { useState } from 'react';
import DashBoardContent from '../components/layout/DashBoardContent';
import MerchandiseModal from '../components/modal/MerchandiseModal';
import TableData from '../components/table/TableData';
import { selectMerchandiseSortBy } from '../constants/selectData';
import { merchandiseTableHeader } from '../constants/tableHeader';
import { useGetMerchandisesQuery } from '../store/slices/apiSlice';

function DashboardMerchandise() {
  const [query, setQuery] = useState({
    search: '',
    sort: 'ASC',
    sortBy: 'name',
    limit: 10,
  });

  const {
    data: merchandise,
    error: errorMerchandise,
    isFetching: loadingMerchandise,
  } = useGetMerchandisesQuery(
    {
      search: query.search, limit: query.limit, sort: query.sort, sortBy: query.sortBy,
    },
  );

  const [modalData, setModalData] = useState({
    show: false,
    data: {
      id: '',
      event_name: '',
      event_id: 1,
      name: '',
      price: 0,
      stock: 0,
    },
  });

  const resetModal = () => {
    setModalData({
      show: false,
      data: {
        id: '',
        event_name: '',
        event_id: 1,
        name: '',
        price: 0,
        stock: 0,
      },
    });
  };

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

  const onEditHandler = (data) => {
    setModalData({
      data: {
        id: data.id,
        event_name: data.event_name,
        event_id: data.event_id,
        name: data.name,
        price: data.price,
        stock: data.stock,
      },
      show: true,
    });
  };

  const handleInputChange = (e) => {
    setModalData({ ...modalData, data: { ...modalData.data, [e.target.name]: e.target.value } });
  };

  const onAddHandler = () => {
    setModalData({ ...modalData, show: true });
  };

  const onCloseModal = () => {
    setModalData({ data: [], show: false });
  };

  return (
    <DashBoardContent title="manage merchandise">
      {modalData.show && (
      <MerchandiseModal
        onCloseModal={onCloseModal}
        show={modalData.show}
        data={modalData.data}
        handleInputChange={handleInputChange}
        handleResetModal={resetModal}
      />
      )}
      <TableData
        title="merchandise"
        tableHeaders={merchandiseTableHeader}
        tableBody={
          !errorMerchandise && !loadingMerchandise && merchandise.data
        }
        isLoading={loadingMerchandise}
        isError={errorMerchandise}
        editHandler={onEditHandler}
        addHandler={onAddHandler}
        searchHandler={onSearchHandler}
        searchAbleData="merchandise name"
        onSortHandler={onSortHandler}
        sortByData={selectMerchandiseSortBy}
      />
    </DashBoardContent>
  );
}

export default DashboardMerchandise;
