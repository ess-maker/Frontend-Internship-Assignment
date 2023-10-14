import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import App from './App';
import "./index.css"
import Itempage from './components/itemspage/Itempage';
import Hero from './components/hero/Hero';
import Joinus from './components/joinus/Joinus';
import Benfites from './components/benfites/Benfites';
import { Provider } from 'react-redux';
import { store } from './store/store';
const router = createBrowserRouter([
  {
  path:"/",
  element:<App />,
  children:[
  {path:"/" , element:<><Hero /><Joinus /><Benfites /></>},
  {path:":name" , element:<Itempage />}
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
