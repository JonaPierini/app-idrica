import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostsAPI } from "../../interfaces";

export const jsonApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostsAPI[], void>({
      query: () => "posts",
    }),
  }),
});

// Exportar hooks generados automáticamente
export const { useFetchPostsQuery } = jsonApi;
