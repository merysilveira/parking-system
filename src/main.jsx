import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App.jsx'
import { Content } from './components/Content.jsx';
import { PlatePage } from './pages/PlatePage.jsx';
import { ReservationDetails } from './pages/ReservationDetails.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Content />,
      },
      {
        path: '/plate-page/:id',
        element: <PlatePage />,
      },
      {
        path: "/plate-page/:id/reservation-details/:id",
        element: <ReservationDetails />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
