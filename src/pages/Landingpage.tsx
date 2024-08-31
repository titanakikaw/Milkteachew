import { Button, Col, Layout, Row, Typography } from "antd";
import * as React from "react";
import photo1 from "../assets/frontphoto.png";
import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";
import collection4 from "../assets/collection4.png";
import facebookIcon from "../assets/icons/facebook.png";
import tiktokIcon from "../assets/icons/logo tiktok.png";
import instaIcon from "../assets/icons/instagram icon.png";
import phoneIcon from "../assets/icons/phone call button.png";
import mailIcon from "../assets/icons/red square mail icon.png";
interface ILandingPageProps {}

const ListofService = [
	{
		index: 1,
		image: collection1,
		title: "Milktea Chew Menu",
		description: `A creamy, fragrant blend of premium black tea, milk, and the ${(
			<br />
		)} rich, earthy flavor of taro.`,
	},
	{
		index: 2,
		image: collection3,
		title: "Quality Service Chew",
		description: `A creamy, fragrant blend of premium black tea, milk, and the ${(
			<br />
		)} rich, earthy flavor of taro.`,
	},
	{
		index: 3,
		image: collection4,
		title: "Discover our team",
		description: `Our milktea cafe was founded with a passion.`,
	},
];

const ListofContact = [
	{
		image: facebookIcon,
		link: "https://www.facebook.com/Chew.aTEAicts",
	},
	{
		image: tiktokIcon,
	},
	{
		image: instaIcon,
	},
	{
		image: phoneIcon,
	},
	{
		image: mailIcon,
		link: "mailto:yourmail@domain.com",
	},
];

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
	return (
		<>
			<Layout style={{ backgroundColor: "white", padding: "0rem 15rem" }}>
				<Row
					style={{
						display: "flex",
						alignItems: "center",
						height: "90vh",
					}}
				>
					<Col span={12}>
						<Typography.Title style={{ fontSize: "48px", fontWeight: "800" }}>
							Indulge in the Creamy Goodness of Our
							<br />
							Milktea
						</Typography.Title>
						<Typography>
							Discover the perfect balance of tea, milk, and flavors at our cozy
							milktea cafe. Sip on a variety of delectable milktea creations
							made with the freshest ingredients.
						</Typography>
						<Row gutter={10} style={{ paddingTop: "1rem" }}>
							<Col>
								<Button
									style={{
										padding: "1.3rem 4rem",
										color: "white",
										backgroundColor: "black",
										fontSize: "12px",
										fontWeight: "bold",
									}}
								>
									View More
								</Button>
							</Col>
							<Col>
								<Button
									style={{
										padding: "1.3rem 4rem",
										fontSize: "12px",
										fontWeight: "bold",
									}}
								>
									Order now
								</Button>
							</Col>
						</Row>
					</Col>
					<Col span={12} style={{ textAlign: "center" }}>
						<img src={photo1} alt="feature_photo" style={{ width: "100%" }} />
					</Col>
				</Row>
			</Layout>
			<Layout style={{ backgroundColor: "#FFF9FC", padding: "7rem 15rem" }}>
				<Row style={{ display: "flex", justifyContent: "center" }}>
					<div
						style={{
							textAlign: "center",
							padding: "1rem 3rem",
							width: "100%",
						}}
					>
						<Typography.Title style={{ fontSize: "45px", fontWeight: "800" }}>
							Discover Our Milktea Flavors & Services
						</Typography.Title>
						<Typography style={{ color: "#3F3F3F" }}>
							From classic to creative, our menu offers a wide range of milktea
							flavors and toppings to satisfy <br />
							every craving.
						</Typography>
						<div
							style={{
								paddingTop: "2rem",
								width: "100%",
							}}
						>
							<Row gutter={[48, 16]}>
								{ListofService?.map((value, index) => {
									return (
										<Col
											key={value?.index}
											span={12}
											style={{ textAlign: "left", padding: "1rem" }}
										>
											<div>
												<img
													src={value?.image}
													alt="col_1"
													style={{ width: "100%" }}
												/>
												<div>
													<Typography
														style={{ fontSize: "15px", fontWeight: "800" }}
													>
														{value?.title}
													</Typography>
													<Typography style={{ fontSize: "13px" }}>
														{value?.description}
													</Typography>
												</div>
											</div>
										</Col>
									);
								})}
							</Row>
						</div>
					</div>
				</Row>
			</Layout>
			<Layout style={{ backgroundColor: "white", padding: "9rem 20rem" }}>
				<Row gutter={16}>
					<Col span={12} style={{ display: "flex", alignItems: "center" }}>
						<div>
							<Typography.Title style={{ fontSize: "45px", fontWeight: "800" }}>
								Crafted with Care
							</Typography.Title>
							<Typography>
								At our milktea cafe, we take pride in our meticulous brewing
								<br />
								process and the use of only the highest quality ingredients.
								<br /> Each cup is carefully crafted to deliver a truly
								exceptional
								<br />
								taste experience.
							</Typography>
						</div>
					</Col>
					<Col
						style={{
							display: "flex",
							justifyContent: "center",
						}}
						span={12}
					>
						<img
							src={collection2}
							about="collection_2"
							style={{ borderRadius: "5%" }}
						/>
					</Col>
				</Row>
			</Layout>
			<Layout style={{ padding: "9rem 15rem" }}>
				<Row
					style={{
						justifyContent: "center",
					}}
				>
					<Col span={24} style={{ textAlign: "center" }}>
						<Typography.Title style={{ fontWeight: "800" }}>
							Get in touch with Us!
						</Typography.Title>
						<br />
						<Typography>
							Have a question, feedback, or want to place an order? Message us
							<br />
							on our social media and we'll get back to you as soon as possible.
						</Typography>
					</Col>
					<Col style={{ paddingTop: "1rem" }}>
						<Row
							gutter={24}
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{ListofContact?.map((value, index) => {
								return (
									<Col span={4.8} key={index}>
										<img
											src={value?.image}
											style={{ width: "55px" }}
											onClick={() => {
												window.location.href = `${value?.link}`;
											}}
										/>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</Layout>
		</>
	);
};

export default LandingPage;
