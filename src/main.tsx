import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/index.css'
import { RouterProvider } from 'react-router-dom'
import { router, store } from '@/app/providers/index.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
