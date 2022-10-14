import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventQuery } from '../store/slices/apiSlice';

function EventDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetEventQuery();

  return (
    <div>EventDetail</div>
  );
}

export default EventDetail;
