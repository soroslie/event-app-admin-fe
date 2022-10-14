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
    getEvents: builder.query({
      query: () => ({
        url: '/event/list',
        method: 'GET',
      }),
      providesTags: ['Event'],
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
      invalidatesTags: (result, error, arg) => (!error ? ['Auth'] : []),
    }),
    // invalidateBooks: builder.mutation({
    //   invalidatesTags: ['Auth'],
    // }),
  }),
});

export const {
  useAuthLoginMutation, useGetUsersQuery, useGetEventsQuery, useGetProfileQuery,
} = apiSlice;
