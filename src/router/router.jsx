/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SingUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminHome from "../Pages/AdminDashBoardPages/AdminHome/AdminHome";
import ManageUsers from "../Pages/AdminDashBoardPages/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/AdminDashBoardPages/ManageClasses/ManageClasses";
import AddAnClass from "../Pages/InstractorDashboardPages/AddAnClass/AddAnClass";
import MyClasses from "../Pages/InstractorDashboardPages/MyClasses/MyClasses";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard",
				element: <AdminHome />,
			},
			{
				path: "/dashboard/manage-users",
				element: <ManageUsers />,
			},
			{
				path: "/dashboard/manage-classes",
				element: <ManageClasses />,
			},
			{
				path: "/dashboard/add-an-class",
				element: <AddAnClass />,
			},
			{
				path: "/dashboard/my-classes",
				element: <MyClasses />,
			},
		],
	},
]);


export default router;
