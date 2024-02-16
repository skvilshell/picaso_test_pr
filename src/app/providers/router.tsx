import { MainPage, PostPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainPage />
   },
   {
      path: '/post/:id',
      element: <PostPage/>
   }
])