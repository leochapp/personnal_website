import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'antd/dist/reset.css';
import reportWebVitals from './reportWebVitals';
import LayoutSite from "./allpages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSite/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>

  <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
