import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = __DEV__
  ? 'http://localhost:3000'
  : 'https://api.yourdomain.com';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Define your API endpoints here
  }),
});

export const { } = apiSlice;
