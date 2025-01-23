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
    deletePosts: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFetchPostsQuery, useDeletePostsMutation } = jsonApi;
