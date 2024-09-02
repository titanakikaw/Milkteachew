import React from "react";
import { Col, Layout, Menu, Row } from "antd";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const { Header } = Layout;

const MenuItems = [
	{
		title: "Menu",
		route: "/Menu",
	},
	{
		title: "Services",
		route: "/Services",
	},
	{
		title: "About Us",
		route: "/AboutUs",
	},
];

const NavBar: React.FC = () => {
	return (
		<Header
			className="responsive-container"
			style={{ background: "#fff", height: "inherit" }}
		>
			<Row style={{ justifyContent: "center" }}>
				<Col>
					<Link to="/">
						<div
							className="logo"
							style={{
								float: "left",
							}}
						>
							<img src={logo} alt="logo" style={{ width: "50px" }} />
						</div>
					</Link>
				</Col>
				<Col flex={1}>
					<Menu
						theme="light"
						mode="horizontal"
						style={{ float: "right", lineHeight: "64px" }}
					>
						{MenuItems?.map((value, index) => {
							return (
								<Menu.Item key={index}>
									<Link to={value.route} style={{ textDecoration: "none" }}>
										{value?.title}
									</Link>
								</Menu.Item>
							);
						})}
					</Menu>
				</Col>
			</Row>
		</Header>
	);
};

export default NavBar;
