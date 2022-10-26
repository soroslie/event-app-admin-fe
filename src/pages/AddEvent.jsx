import React, { useState } from 'react';
import DashBoardContent from '../components/layout/DashBoardContent';
import { useGetEventCategoriesQuery, useGetEventStatusQuery, usePostCreateEventMutation } from '../store/slices/apiSlice';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';
import Select from '../components/inputs/Select';
import PrimarryButton from '../components/inputs/PrimaryButton';
import StringHelper from '../helper/stringHelper';
import FileUpload from '../components/inputs/FileUpload';
import ErrorCard from '../components/ErrorCard';

function AddEvent() {
  const {
    data: eventStatus,
    error: eventStatusError,
    isFetching: eventStatusIsLoading,
  } = useGetEventStatusQuery();
  const {
    data: eventCategory,
    error: eventCategoryError,
    isFetching: eventCategoryIsLoading,
  } = useGetEventCategoriesQuery();

  const [createEvent] = usePostCreateEventMutation();

  const [input, setInput] = useState({
    eventName: '',
    eventDescription: '',
    eventStatus: '1',
    eventCategory: '1',
    eventTicketPrice: '',
    eventDuration: '',
    eventCapacity: '',
    eventStartTime: '',
    eventPicture: [],
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFile = (file) => {
    setInput({ ...input, eventPicture: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line prefer-const
    let formData = new FormData();
    formData.append('category_id', parseInt(input.eventCategory, 10));
    formData.append('status_id', parseInt(input.eventStatus, 10));
    formData.append('name', input.eventName);
    formData.append('picture', input.eventPicture);
    formData.append('description', input.eventDescription);
    formData.append('start_time', input.eventStartTime);
    formData.append('duration', parseInt(input.eventDuration, 10));
    formData.append('ticket_price', parseInt(input.eventTicketPrice, 10));
    formData.append('max_capacity', parseInt(input.eventCapacity, 10));
    createEvent(formData).unwrap()
      .then((data) => {

      })
      .catch((error) => {

      });
  };

  if (eventStatusError || eventCategoryError) {
    return <ErrorCard message="oop something went wrong" />;
  }

  return (
    <DashBoardContent title="add event">
      <form className="p-4 bg-white shadow-xl mt-2 max-w-2xl mx-auto">
        <FileUpload onUponUploadFile={handleFile} />
        <Input
          name="eventName"
          title="Name"
          type="text"
          placholder="event name..."
          value={input.eventName}
          onChange={handleChange}
        />
        <TextArea
          name="eventDescription"
          title="description"
          type="text"
          placholder="event description..."
          value={input.eventDescription}
          onChange={handleChange}
        />

        {!eventStatusIsLoading && !eventStatusError ? (
          <Select
            title="status"
            name="eventStatus"
            value={input.eventStatus}
            data={eventStatus.data}
            defaultValue={input.eventStatus ? input.eventStatus : '1'}
            isLoading={eventCategoryIsLoading}
            onChange={handleChange}
          />
        ) : (
          <div className="animate-pulse rounded-xl my-3 bg-slate-200 h-10 w-full mx-auto shadow-2xl flex items-center justify-center" />
        )}
        {!eventCategoryIsLoading && !eventCategoryError ? (
          <Select
            title="category"
            name="eventCategory"
            value={input.eventCategory}
            data={eventCategory.data}
            defaultValue={input.eventCategory ? input.eventCategory : '1'}
            isLoading={eventCategoryIsLoading}
            onChange={handleChange}
          />
        ) : (
          <div className="animate-pulse rounded-xl my-3 bg-slate-200 h-10 w-full mx-auto shadow-2xl flex items-center justify-center" />
        )}
        <Input
          name="eventTicketPrice"
          title="entry fee"
          type="number"
          placholder="IDR 100000"
          value={input.eventTicketPrice}
          onChange={handleChange}
        />
        <Input
          name="eventCapacity"
          title="capacity"
          type="number"
          placholder="100"
          value={input.eventCapacity}
          onChange={handleChange}
        />
        <Input
          name="eventDuration"
          title="duration"
          type="number"
          placholder="90"
          value={input.eventDuration}
          onChange={handleChange}
        />
        <Input
          name="eventStartTime"
          title="start time"
          type="datetime-local"
          placholder=""
          min={StringHelper.dateTimeNow()}
          value={input.eventStartTime}
          onChange={handleChange}
        />
        <PrimarryButton onClick={handleSubmit} title="confirm" />
      </form>
    </DashBoardContent>
  );
}

export default AddEvent;
