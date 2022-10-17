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
      query: () => ({
        url: '/user/list',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'GET',
      }),
      providesTags: ['Profile'],
    }),
    getEvent: builder.query({
      query: (id) => ({
        url: '/event',
        method: 'POST',
        body: {
          id,
        },
      }),
      providesTags: ['Event'],
    }),
    getEvents: builder.query({
      query: ({
        search, limit, sort, sortBy,
      }) => ({
        url: `/events?search=${search}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`,
        method: 'GET',
      }),
      providesTags: ['Event'],
    }),
    getEventStatus: builder.query({
      query: () => ({
        url: '/event/status_list',
        method: 'GET',
      }),
      providesTags: ['Event'],
    }),
    getEventCategories: builder.query({
      query: () => ({
        url: '/event/category_list',
        method: 'GET',
      }),
      providesTags: ['Event'],
    }),
    getEventNameList: builder.query({
      query: () => ({
        url: '/event/event_and_id_list',
        method: 'GET',
      }),
      providesTags: ['Event'],
    }),
    getMerchandises: builder.query({
      query: ({
        search, limit, sort, sortBy,
      }) => ({
        url: `/merchandise/list?search=${search}&limit=${limit}&sortBy=${sortBy}&sort=${sort}`,
        method: 'GET',
      }),
      providesTags: ['Merchandise'],
      invalidatesTags: (result, error, arg) => (!error ? ['Merchandise'] : []),
    }),
    postEditMerchandise: builder.mutation({
      query: ({
        id, eventId, name, stock, price,
      }) => ({
        headers: (headers) => setPrepareHeader(headers),
        url: '/event/merchandise',
        method: 'PATCH',
        body: {
          id,
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
        method: 'POST',
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
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      // invalidatesTags: (result, error, arg) => (!error ? ['Auth'] : []),
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
  useLazyGetEventsQuery,
  useLazyGetMerchandisesQuery,
  usePostEditMerchandiseMutation,
  usePostCreateMerchandiseMutation,
  useGetEventQuery,
  useGetProfileQuery,
} = apiSlice;
