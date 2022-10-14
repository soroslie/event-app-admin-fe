import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  useGetEventCategoriesQuery,
  useGetEventQuery,
  useGetEventStatusQuery,
} from '../store/slices/apiSlice';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';
import Select from '../components/inputs/Select';

function EventDetail() {
  const { id } = useParams();
  const {
    data: eventData,
    error: eventError,
    isLoading: eventIsLoading,
  } = useGetEventQuery(Number(id));
  const {
    data: eventStatus,
    error: eventStatusError,
    isLoading: eventStatusIsLoading,
  } = useGetEventStatusQuery();
  const {
    data: eventCategory,
    error: eventCategoryError,
    isLoading: eventCategoryIsLoading,
  } = useGetEventCategoriesQuery();

  return (
    <>
      <PageHeader title="Event Edit" />
      <div className="p-4 bg-white shadow-xl mt-2 max-w-2xl mx-auto">
        <Input
          name="eventName"
          title="Name"
          type="text"
          placholder="event name..."
          isLoading={eventIsLoading}
        />
        <TextArea
          name="eventDescription"
          title="description"
          type="text"
          placholder="event description..."
          isLoading={eventIsLoading}
        />

        {eventStatusIsLoading ? (
          <div className="animate-pulse rounded-xl my-3 bg-slate-200 h-10 w-full mx-auto shadow-2xl flex items-center justify-center" />
        ) : (
          <Select
            title="status"
            name="eventStatus"
            data={eventStatus.data}
            defaultValue="1"
            isLoading={eventCategoryIsLoading}
          />
        )}
        {eventCategoryIsLoading ? (
          <div className="animate-pulse rounded-xl my-3 bg-slate-200 h-10 w-full mx-auto shadow-2xl flex items-center justify-center" />
        ) : (
          <Select
            title="category"
            name="eventCategory"
            data={eventCategory.data}
            defaultValue="1"
            isLoading={eventCategoryIsLoading}
          />
        )}
        <Input
          name="eventTicketPrice"
          title="entry fee"
          type="number"
          placholder="IDR 100000"
          isLoading={eventIsLoading}
        />
        <Input
          name="eventDuration"
          title="capacity"
          type="number"
          placholder="90"
          isLoading={eventIsLoading}
        />
        <Input
          name="eventDuration"
          title="duration (minutes)"
          type="number"
          placholder="90"
          isLoading={eventIsLoading}
        />
        <Input
          name="eventStartTime"
          title="start time"
          type="datetime-local"
          placholder=""
          isLoading={eventIsLoading}
        />
      </div>
    </>
  );
}

export default EventDetail;
