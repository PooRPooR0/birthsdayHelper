import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";

import "./assets/styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DefaultLayout pageTitle={"Home"}>
        <HomePage />
    </DefaultLayout>
  </React.StrictMode>
);
