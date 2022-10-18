import React, { useState } from 'react';
import DashBoardContent from '../components/layout/DashBoardContent';
import { useGetEventCategoriesQuery, useGetEventStatusQuery } from '../store/slices/apiSlice';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';
import Select from '../components/inputs/Select';
import PrimarryButton from '../components/inputs/PrimaryButton';
import StringHelper from '../helper/stringHelper';
import ErrorCard from '../components/ErrorCard';
import FileUpload from '../components/inputs/FileUpload';

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

  const [input, setInput] = useState({
    eventName: '',
    eventDescription: '',
    eventStatus: '1',
    eventCategory: '1',
    eventTicketPrice: '',
    eventDuration: '',
    eventCapacity: '',
    eventStartTime: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <DashBoardContent title="add event">
      <form className="p-4 bg-white shadow-xl mt-2 max-w-2xl mx-auto">
        <FileUpload />
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
          placholder="90"
          value={input.eventCapacity}
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
