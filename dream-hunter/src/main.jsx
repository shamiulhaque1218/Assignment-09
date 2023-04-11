import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './Component/Jobs/Jobs';
import Home from './Component/Home/Home';
import Question from './Component/Question/Question';
import Statistics from './Component/Statistics/Statistics';
import JobDetails from './Component/JobDetails/JobDetails';
import ErrorPage from './Component/ErrorPage';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home> </Home> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <App> </App>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetails> </JobDetails>,
        loader: ({params}) =>
          fetch('/jobdata.json'),
      },
      {
        path:'/jobs',
        element: <Jobs> </Jobs>,
        loader: () => fetch('/jobdata.json')
      },
      {
        path:'/question&answer',
        element: <Question> </Question>,
      },
      {
        path:'/statistics',
        element: <Statistics> </Statistics>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
