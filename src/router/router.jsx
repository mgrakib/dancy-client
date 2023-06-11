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
import MySelectedClass from "../Pages/StudentDashBoardPages/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/StudentDashBoardPages/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/StudentDashBoardPages/Payment/Payment";
import PaymentHistory from "../Pages/StudentDashBoardPages/PaymentHistory/PaymentHistory";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import InstractorClasses from "../Pages/InstractorClasses/InstractorClasses";
import AdminRouter from "./AdminRouter";
import InstructorRouter from "./InstructorRouter";

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
				path: "/nstructors",
				element: <Instructors />,
			},
			{
				path: "/classes",
				element: <Classes />,
			},
			{
				path: "/instractors-classes/:email",
				element: <InstractorClasses />,
				loader: ({ params }) =>
					fetch(
						`http://localhost:5000/get-instructor-classes/${params.email}`
					),
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
			// admin dashboard router
			{
				path: "/dashboard",
				element: <AdminHome />,
			},
			{
				path: "/dashboard/manage-users",
				element: (
					<AdminRouter>
						<ManageUsers />
					</AdminRouter>
				),
			},
			{
				path: "/dashboard/manage-classes",
				element: (
					<AdminRouter>
						<ManageClasses />
					</AdminRouter>
				),
			},
			// instracture dashboard router
			{
				path: "/dashboard/add-an-class",
				element: (
					<InstructorRouter>
						<AddAnClass />
					</InstructorRouter>
				),
			},
			{
				path: "/dashboard/my-classes",
				element: (
					<InstructorRouter>
						<MyClasses />
					</InstructorRouter>
				),
			},
			// student dashboard router
			{
				path: "/dashboard/my-selected-classes",
				element: <MySelectedClass />,
			},
			{
				path: "/dashboard/my-enrolled-classes",
				element: <MyEnrolledClass />,
			},

			{
				path: "/dashboard/payment-history",
				element: <PaymentHistory />,
			},
		],
	},
]);


export default router;
