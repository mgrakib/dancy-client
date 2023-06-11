/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import {
	QueryClient,
	QueryClientProvider,
} from "react-query";
import { HelmetProvider } from "react-helmet-async";


// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<AuthProvider>
					<RouterProvider router={router} />
					<Toaster />
				</AuthProvider>
			</HelmetProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
