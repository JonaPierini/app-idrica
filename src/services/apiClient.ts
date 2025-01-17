import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiClient = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<any[], void>({
      query: () => "posts",
    }),
    fetchComments: builder.query<any[], number>({
      query: (postId) => `comments?postId=${postId}`,
    }),
  }),
});

// Exportar hooks generados automáticamente
export const { useFetchPostsQuery, useFetchCommentsQuery } = apiClient;
