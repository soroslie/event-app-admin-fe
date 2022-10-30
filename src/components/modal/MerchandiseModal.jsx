import React, { useState } from 'react';
import Input from '../inputs/Input';
import CancelModalButton from './CancelModalButton';
import PrimarryButton from '../inputs/PrimaryButton';
import ModalLayout from './ModalLayout';
import {
  useGetEventNameListQuery,
  usePostCreateMerchandiseMutation,
  usePatchtEditMerchandiseMutation,
} from '../../store/slices/apiSlice';
import Select from '../inputs/Select';
import ErrorModal from './ErrorModal';

function MerchandiseModal({
  show, data, handleInputChange, onCloseModal, handleResetModal,
}) {
  if (!show) {
    return null;
  }
  const {
    data: eventNameList,
    error: errorEventNameList,
    isLoading: loadingEventNameList,
  } = useGetEventNameListQuery();

  const [createMerchandise] = usePostCreateMerchandiseMutation();
  const [editMerchandise] = usePatchtEditMerchandiseMutation();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorModal, setErrorModal] = useState({
    error: '',
    show: false,
  });

  const [inputError, setInputError] = useState({
    id: '',
    name: '',
    event_name: '',
    stock: '',
    price: '',
  });

  // eslint-disable-next-line consistent-return
  const submitHandler = (e) => {
    e.preventDefault();

    setButtonLoading(true);
    // edit
    if (data.id) {
      editMerchandise({
        id: data.id,
        eventId: parseInt(data.event_id, 10),
        name: data.name,
        stock: parseInt(data.stock, 10),
        price: parseInt(data.price, 10),
      })
        .unwrap()
        .then(() => {})
        .catch((error) => {
          console.log(error);
          // show error modal
          setErrorModal({ error: 'error', show: true });
        })
        .finally(() => {
          setButtonLoading(false);
          handleResetModal();
        });
    }
    if (!data.id) {
      // createe;
      createMerchandise({
        eventId: parseInt(data.event_id, 10),
        name: data.name,
        stock: parseInt(data.stock, 10),
        price: parseInt(data.price, 10),
      })
        .unwrap()
        .then(() => {})
        .catch((error) => {
          // show error modal
          setErrorModal({ error: 'error', show: true });
        })
        .finally(() => {
          setButtonLoading(false);
          handleResetModal();
        });
    }
  };

  const onCloseErrorModal = () => {
    setErrorModal({ error: '', show: false });
  };

  return (
    <ModalLayout title={data.id ? 'edit merchandise' : 'add merchandise'}>
      <ErrorModal
        show={errorModal.show}
        message={ErrorModal.error}
        onCloseModal={onCloseErrorModal}
      />
      <div className="p-6 space-y-6">
        <form onSubmit={submitHandler}>
          {data.id && (
            <Input
              title="id"
              placholder="0"
              name="id"
              value={data.id}
              onChange={handleInputChange}
              disabled
              error={inputError.id}
            />
          )}
          <div className="hidden">
            <Input
              title="event id"
              placholder="0"
              name="event_id"
              value={data.event_id}
              onChange={handleInputChange}
              disabled
              error={inputError.eventId}
            />
          </div>
          {!data.id && (
            <Select
              onChange={handleInputChange}
              data={
                !loadingEventNameList && !errorEventNameList
                  ? eventNameList.data
                  : []
              }
              defaultValue={!loadingEventNameList && !errorEventNameList
                ? eventNameList.data[0].value
                : null}
              error={errorEventNameList}
              isLoading={loadingEventNameList}
              name="event_id"
              title="event name"
            />
          )}
          {data.id && (
            <Input
              title="event name"
              placholder="event name..."
              name="event_name"
              disabled
              value={data.event_name}
              onChange={handleInputChange}
              error={inputError.event_name}
            />
          )}
          <Input
            title="merchandise name"
            placholder="name..."
            name="name"
            value={data.name}
            onChange={handleInputChange}
            error={inputError.name}
          />
          <Input
            title="price"
            placholder="0"
            type="number"
            name="price"
            value={data.price}
            onChange={handleInputChange}
            error={inputError.price}
          />
          <Input
            title="stock"
            placholder="0"
            type="number"
            name="stock"
            value={data.stock ? data.stock : ''}
            onChange={handleInputChange}
            error={inputError.stock}
          />
          <PrimarryButton
            title="confirm"
            onClick={submitHandler}
            isLoading={buttonLoading}
          />
        </form>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} />
      </div>
    </ModalLayout>
  );
}

export default MerchandiseModal;
