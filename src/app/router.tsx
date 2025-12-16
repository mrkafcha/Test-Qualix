import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Requests } from "../pages/requests/ui/Requests.tsx";
import {RequestNew} from "../pages/requests-new/ui/RequestNew.tsx";
import {RequestDetails} from "../pages/requests-details/ui/RequestDetails.tsx";

export const router = createBrowserRouter([
    {
        path: '/Test-Qualix/',
        element: <Navigate to="/Test-Qualix/requests" replace />,
    },
    {
        path: '/Test-Qualix/requests',
        element: <Requests />,
    },
    {
        path: '/Test-Qualix/requests/new',
        element: <RequestNew />,
    },
    {
        path: '/Test-Qualix/requests/:id',
        element: <RequestDetails />,
    }
]);