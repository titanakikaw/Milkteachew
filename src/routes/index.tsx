import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import ServicesPage from "../pages/ServicesPage";
import App from "../App";
import { Menupage } from "../pages/Menupage";
import { AboutUs } from "../pages/Aboutuspage";

export default createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "Services",
				element: <ServicesPage />,
			},
			{
				path: "/Menu",
				element: <Menupage />,
			},
			{
				path: "/AboutUs",
				element: <AboutUs />,
			},
		],
	},
]);
