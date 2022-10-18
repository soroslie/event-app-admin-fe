import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetEventCategoriesQuery,
  useGetEventQuery,
  useGetEventStatusQuery,
} from '../store/slices/apiSlice';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';
import Select from '../components/inputs/Select';
import PrimarryButton from '../components/inputs/PrimaryButton';
import StringHelper from '../helper/stringHelper';
import { merchandiseTableHeader } from '../constants/tableHeader';
import TableData from '../components/table/TableData';
import DashBoardContent from '../components/layout/DashBoardContent';
import ErrorCard from '../components/ErrorCard';

function EventDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    data: eventData,
    error: eventError,
    isFetching: eventIsLoading,
  } = useGetEventQuery(Number(id));

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

  useEffect(() => {
    if (eventError && !eventIsLoading) {
      if (eventError.data.code === 404) {
        navigate('/notfound');
      }
    }
    if (eventData && !eventError && !eventIsLoading) {
      const newData = eventData.data;

      setInput({
        eventName: newData.name,
        eventDescription: newData.description,
        eventStatus: newData.status_id,
        eventCategory: newData.category_id,
        eventTicketPrice: newData.ticket_price,
        eventDuration: newData.duration,
        eventCapacity: newData.capacity,
        eventStartTime: StringHelper.dateTimeForInput(newData.start_time),
      });
    }
  }, [eventData, eventIsLoading]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!eventIsLoading && !eventStatusIsLoading && !eventCategoryIsLoading) {
    if (eventStatusError || eventCategoryError || eventError) {
      return <ErrorCard message="oop something went wrong" />;
    }
  }

  return (
    <DashBoardContent title="event edit">
      <form className="p-4 bg-white shadow-xl mt-2 max-w-2xl mx-auto">
        <Input
          name="eventName"
          title="Name"
          type="text"
          placholder="event name..."
          value={input.eventName}
          isLoading={eventIsLoading}
          onChange={handleChange}
        />
        <TextArea
          name="eventDescription"
          title="description"
          type="text"
          placholder="event description..."
          value={input.eventDescription}
          isLoading={eventIsLoading}
          onChange={handleChange}
        />

        {!eventStatusIsLoading && !eventIsLoading && !eventStatusError && !eventError ? (
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
        {!eventCategoryIsLoading && !eventIsLoading && !eventCategoryError && !eventError ? (
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
          isLoading={eventIsLoading}
          onChange={handleChange}
        />
        <Input
          name="eventCapacity"
          title="capacity"
          type="number"
          placholder="90"
          value={input.eventCapacity}
          isLoading={eventIsLoading}
          onChange={handleChange}
        />
        <Input
          name="eventStartTime"
          title="start time"
          type="datetime-local"
          placholder=""
          min={StringHelper.dateTimeNow()}
          value={input.eventStartTime}
          isLoading={eventIsLoading}
          onChange={handleChange}
        />
        <PrimarryButton onClick={handleSubmit} title="confirm" />
      </form>
      <TableData
        title="merchandise"
        tableHeaders={merchandiseTableHeader}
        tableBody={!eventIsLoading && !eventError && eventData.data.merchandises}
        isLoading={eventIsLoading}
      />
    </DashBoardContent>
  );
}

export default EventDetail;
