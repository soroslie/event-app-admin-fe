import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIConstatnt from '../../constants/api';
import setPrepareHeader from '../../helper/apiHeader';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: APIConstatnt.baseUrl,
    prepareHeaders: setPrepareHeader,
  }),
  tagTypes: ['Profile', 'Event', 'Merchandise'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({
        search, limit, sort, sortBy,
      }) => ({
        url: `/users?search=${search}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Users'],
      invalidatesTags: (result, error, arg) => (!error ? ['Users'] : []),
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Profile'],
    }),
    getEvent: builder.query({
      query: (id) => ({
        url: `/events/${id}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Event'],
    }),
    getEvents: builder.query({
      query: ({
        search, limit, sort, sortBy,
      }) => ({
        url: `/events?search=${search}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Event'],
      invalidatesTags: (result, error, arg) => (!error ? ['Event'] : []),
    }),
    getEventStatus: builder.query({
      query: () => ({
        url: '/event/status-list',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Event'],
    }),
    getEventCategories: builder.query({
      query: () => ({
        url: '/event/category-list',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Event'],
    }),
    getEventNameList: builder.query({
      query: () => ({
        url: '/event/event_and_id_list',
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Event'],
    }),
    getMerchandises: builder.query({
      query: ({
        search, limit, sort, sortBy,
      }) => ({
        url: `/event/merchandises?search=${search}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`,
        method: APIConstatnt.METHOD.get,
      }),
      providesTags: ['Merchandise'],
      invalidatesTags: (result, error, arg) => (!error ? ['Merchandise'] : []),
    }),
    patchtEditMerchandise: builder.mutation({
      query: ({
        id, eventId, name, stock, price,
      }) => ({
        headers: (headers) => setPrepareHeader(headers),
        url: `/event/merchandises/${id}`,
        method: APIConstatnt.METHOD.patch,
        body: {
          event_id: eventId,
          name,
          stock,
          price,
        },
      }),
      providesTags: ['Merchandise'],
      invalidatesTags: (result, error, arg) => (!error ? ['Merchandise'] : []),
    }),
    postCreateMerchandise: builder.mutation({
      query: ({
        eventId, name, stock, price,
      }) => ({
        headers: (headers) => setPrepareHeader(headers),
        url: '/event/merchandise',
        method: APIConstatnt.METHOD.post,
        body: {
          event_id: eventId,
          name,
          stock,
          price,
        },
      }),
      providesTags: ['Merchandise'],
      invalidatesTags: (result, error, arg) => (!error ? ['Merchandise'] : []),
    }),
    authLogin: builder.mutation({
      query: ({ email, password }) => ({
        headers: (headers) => setPrepareHeader(headers),
        url: '/auth/login',
        method: APIConstatnt.METHOD.post,
        body: {
          email,
          password,
        },
      }),
    }),
    postCreateEvent: builder.mutation({
      query: (formData) => ({
        headers: {
          Accept: 'application/json',
        },
        url: '/event',
        method: APIConstatnt.METHOD.post,
        body: formData,
      }),
      providesTags: ['Event'],
      invalidatesTags: (result, error, arg) => (!error ? ['Event'] : []),
    }),
    patchEditEvent: builder.mutation({
      query: ({ formData, id }) => ({
        headers: {
          Accept: 'application/json',
        },
        url: `/events/${id}`,
        method: APIConstatnt.METHOD.patch,
        body: formData,
      }),
      providesTags: ['Event'],
      invalidatesTags: (result, error, arg) => (!error ? ['Event'] : []),
    }),
    // invalidateBooks: builder.mutation({
    //   invalidatesTags: ['Auth'],
    // }),
  }),
});

export const {
  useAuthLoginMutation,
  useGetUsersQuery,
  useGetEventStatusQuery,
  useGetEventCategoriesQuery,
  useGetEventNameListQuery,
  useGetEventsQuery,
  useGetMerchandisesQuery,
  usePatchtEditMerchandiseMutation,
  usePostCreateMerchandiseMutation,
  useGetEventQuery,
  useGetProfileQuery,

  usePostCreateEventMutation,
  usePatchEditEventMutation,
} = apiSlice;
