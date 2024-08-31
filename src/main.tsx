import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
	// <StrictMode>/
	<ConfigProvider
		theme={{
			token: {
				fontFamily: "Inter, sans-serif",
				colorPrimary: "black",
				fontWeightStrong: 800,
			},
		}}
	>
		<RouterProvider router={routes}></RouterProvider>
	</ConfigProvider>
	// {/* </StrictMode> */}
);
