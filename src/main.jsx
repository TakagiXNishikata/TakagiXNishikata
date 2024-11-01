import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import AllProjects from './components/AllProjects.jsx'
import ReactDOM from 'react-dom/client'
import * as React from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App/>
      </Layout>
    ),
    errorElement: <ErrorPage/>
  },
  {
    path: '/projects',
    element: (
      <Layout>
        <AllProjects/>
      </Layout>
    ),
    errorElement: <ErrorPage/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
