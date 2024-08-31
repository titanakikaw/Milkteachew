import { Layout } from "antd";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

function App() {
	return (
		<Layout
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<NavBar />
			<Content
				style={{
					flex: 1,
					height: "100vh",
					background: "white",
				}}
			>
				<Outlet />
			</Content>
			<Footer style={{ padding: "1rem 5rem", backgroundColor: "white" }}>
				© 2024 Milk Tea Chew. All rights reserved.
			</Footer>
		</Layout>
	);
}

export default App;
