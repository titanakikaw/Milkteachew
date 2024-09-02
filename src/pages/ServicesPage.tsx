import { Col, Layout, Row, Typography } from "antd";
import * as React from "react";
import albumPhoto from "../assets/image 3.png";
import albumPhoto4 from "../assets/events logo 1.png";
import albumPhoto2 from "../assets/events 4.png";
import albumPhoto3 from "../assets/collection3.png";
import { MailFilled, PhoneFilled } from "@ant-design/icons";

interface IServicesPageProps {}

const ServicesPage: React.FunctionComponent<IServicesPageProps> = () => {
	return (
		<Layout
			style={{ background: "white", height: "100%" }}
			className="reponsive-layout"
		>
			<Typography style={{ fontWeight: "bold", fontSize: "38px" }}>
				Quality Service
			</Typography>
			<Typography>
				Our team is dedicated to provide the best food, drinks and services to
				any events like birthdays, weddings, company events and more, Just hit
				us on our social media accounts, email or better yet talk to us thru our
				contact number below
			</Typography>
			<Row>
				<Col lg={16} xs={24} className="small-col-order-2">
					<Row gutter={[12, 12]} style={{ width: "100%" }}>
						<Col xs={24} lg={12}>
							<div
								style={{
									borderRadius: "1rem",
									height: "250px",
									backgroundImage: `url(${albumPhoto})`,
									backgroundRepeat: "no-repeat",
								}}
							/>
						</Col>
						<Col xs={24} lg={12}>
							<div
								style={{
									borderRadius: "1rem",
									width: "100%",
									height: "250px",
									backgroundImage: `url(${albumPhoto2})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}}
							/>
						</Col>
						<Col xs={24} lg={12} className="small-col-order-2">
							<div
								style={{
									borderRadius: "1rem",
									width: "100%",
									height: "250px",
								}}
							>
								<Typography style={{ fontWeight: "800" }}>
									Get in touch with us:
								</Typography>
								<div style={{ display: "flex" }}>
									<PhoneFilled />
									<Typography style={{ paddingLeft: "1rem" }}>
										+63935 581 0218
									</Typography>
								</div>
								<div style={{ display: "flex" }}>
									<MailFilled />
									<Typography style={{ paddingLeft: "1rem" }}>
										mynameishaide@gmail.com
									</Typography>
								</div>
							</div>
						</Col>
						<Col xs={24} lg={12}>
							<div
								style={{
									borderRadius: "1rem",
									width: "100%",
									height: "250px",
									backgroundSize: "cover",
									backgroundImage: `url(${albumPhoto3})`,
									backgroundRepeat: "no-repeat",
								}}
							/>
						</Col>
					</Row>
				</Col>
				<Col lg={8} xs={24} className="small-col-order-1">
					<div
						style={{
							borderRadius: "1rem",
							height: "100%",
							width: "100%",
							backgroundImage: `url(${albumPhoto4})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					/>
				</Col>
			</Row>
		</Layout>
	);
};

export default ServicesPage;
