import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import { useState, useEffect } from "react";

import Navbar from "../component/Navbar";
import Landing from "../component/Landing"
import Restaurants from "../component/Restaurants";
import ProductDetail from "../component/ProductDetail";
import SignUp from "../component/SignUp";
import Login from "../component/Login";
import Error from "../component/Error";
import AdminDashboard from "../component/AdminDashboard";
import Admin from "../component/Admin";
import CheckOut from "../component/CheckOut";
// import { auth } from '../config/Firebase'
// import { onAuthStateChanged } from "firebase/auth"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/dashboard',
                element: <AdminDashboard />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
            {
                path: '/*',
                element: <Error />,
            },
            {
                path: '/restaurants',
                element: <Restaurants />,
            },
            {
                path: '/restaurants/:restaurants_id',
                element: <ProductDetail />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/checkout',
                element: <CheckOut />,
            },


        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div >
            
            <Navbar />
            <Outlet />
        </div>

    )
}
// Main()
export default Router