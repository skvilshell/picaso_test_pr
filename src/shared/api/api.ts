import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostDto, UserDTO, endpoint } from ".";

const jsonplaceholderBaseApi = "https://jsonplaceholder.typicode.com/"

export const JsonplaceholderAPI = createApi({
   reducerPath: "JsonplaceholderAPI",
   baseQuery: fetchBaseQuery({ baseUrl: jsonplaceholderBaseApi }),
   endpoints: (builder) => ({
      getPosts: builder.query<PostDto[], void>({
         query: () => endpoint.POSTS,
      }),
      getPostById: builder.query<PostDto, string>({
         query: (id: string) => `${endpoint.POSTS}/${id}`
      }),
      getUserById: builder.query<UserDTO, number>({
         query: (id: number) => `${endpoint.USERS}/${id}`
      })
   })
})

export const {
   useGetPostsQuery,
   useGetUserByIdQuery,
   useGetPostByIdQuery
} = JsonplaceholderAPI