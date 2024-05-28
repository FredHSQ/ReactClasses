import React from 'react'
import ReactDOM from 'react-dom/client'
import './src/index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '/src/utils/router';
import { FavEnemyProvider } from './src/context/FavEnemyContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavEnemyProvider>
      <RouterProvider router={router} />
    </FavEnemyProvider>
  </React.StrictMode>
);
