import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIConstatnt from '../../constants/api';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: APIConstatnt.baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Content-type', 'application/json; charset=UTF-8');
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: ({
        email, password,
      }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email, password,
        },
      }),
      invalidatesTags: (result, error, arg) => (!error ? ['Auth'] : []),
    }),
    invalidateBooks: builder.mutation({
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useInvalidateBooksMutation,
} = apiSlice;
