import React from "react";
import { Layout, Menu } from "antd";
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
	// {
	// 	title: "Contact Us",
	// 	route: "/ContactsUs",
	// },
	{
		title: "About Us",
		route: "/AboutUs",
	},
];

const NavBar: React.FC = () => {
	return (
		<Header style={{ background: "#fff", padding: "0 10rem" }}>
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
			<Menu
				theme="light"
				mode="horizontal"
				// defaultSelectedKeys={["0"]}
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
		</Header>
	);
};

export default NavBar;
