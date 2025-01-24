import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostsAPI } from "../../interfaces";
import { API_URL } from "../../config";

export const postApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostsAPI[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<PostsAPI, Partial<PostsAPI>>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<PostsAPI, Partial<PostsAPI>>({
      query: (body) => ({
        url: `/posts/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Posts", id }],
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Posts", id },
        "Posts",
      ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
