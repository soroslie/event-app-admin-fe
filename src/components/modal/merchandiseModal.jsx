import React, { useState } from 'react';
import Input from '../inputs/Input';
import CancelModalButton from './CancelModalButton';
import PrimarryButton from '../inputs/PrimaryButton';
import ModalLayout from './ModalLayout';
import { useGetEventNameListQuery, usePostCreateMerchandiseMutation, usePostEditMerchandiseMutation } from '../../store/slices/apiSlice';
import Select from '../inputs/Select';

function MerchandiseModal({
  show,
  data,
  handleInputChange,
  onCloseModal,
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
  const [editMerchandise] = usePostEditMerchandiseMutation();

  const [buttonLoading, setButtonLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    // create
    if (!data.id) {
      setButtonLoading(true);
      createMerchandise({
        eventId: parseInt(data.event_id, 10),
        name: data.name,
        stock: parseInt(data.stock, 10),
        price: parseInt(data.price, 10),
      }).unwrap().then(() => {
      })
        .catch((error) => {
          console.log(error);
          // show error modal
        })
        .finally(() => {
          setButtonLoading(false);
          onCloseModal();
        });
    }
    // edit
    if (data.id) {
      setButtonLoading(true);
      editMerchandise({
        id: data.id,
        eventId: parseInt(data.event_id, 10),
        name: data.name,
        stock: parseInt(data.stock, 10),
        price: parseInt(data.price, 10),
      }).unwrap().then(() => {
      })
        .catch((error) => {
          console.log(error);
          // show error modal
        })
        .finally(() => {
          setButtonLoading(false);
          onCloseModal();
        });
    }
  };

  return (
    <ModalLayout title={data.id ? 'Edit Merchandise' : 'Add Merchandise'}>
      <div className="p-6 space-y-6">
        <form action="">
          {data.id && (
          <Input
            title="id"
            placholder="0"
            name="id"
            value={data.id}
            onChange={handleInputChange}
            disabled
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
            />
          </div>
          { !data.id && <Select onChange={handleInputChange} data={!loadingEventNameList && !errorEventNameList ? eventNameList.data : []} error={errorEventNameList} isLoading={loadingEventNameList} name="event_id" title="event name" />}
          {data.id && (
          <Input
            title="event name"
            placholder="event name..."
            name="event_name"
            disabled
            value={data.event_name}
            onChange={handleInputChange}
          />
          )}
          <Input
            title="merchandise name"
            placholder="name..."
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <Input
            title="price"
            placholder="0"
            type="number"
            name="price"
            value={data.price}
            onChange={handleInputChange}
          />
          <Input
            title="stock"
            placholder="0"
            type="number"
            name="stock"
            value={data.stock}
            onChange={handleInputChange}
          />
          <PrimarryButton title="confirm" onClick={submitHandler} isLoading={buttonLoading} />
        </form>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} />
      </div>
    </ModalLayout>
  );
}

export default MerchandiseModal;
