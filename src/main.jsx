import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobCategory from './components/JobCategory/JobCategory';
import JobCard from './components/JobCard/JobCard';
import HomePage from './components/HomePage/HomePage';
import Job from './components/Job/Job';
import Details from './components/JobCardInfo/Details/Details';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Chart from './components/Chart/Chart';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        
      },
      // {
      //   path: "/",
      //   element: <JobCategory></JobCategory>,
      //   loader: () => fetch('JobCategory.json')
      // },
      // {
      //   path: "/",
      //   element: <JobCard></JobCard>,
      //   loader: () => fetch('JobData.json')
      // },
      {
        path: "/job",
        element: <Details></Details>,
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/Statistics",
        element: <Chart></Chart>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
