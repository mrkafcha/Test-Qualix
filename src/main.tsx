import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css'
import store from "./ entities/store.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router.tsx";

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);