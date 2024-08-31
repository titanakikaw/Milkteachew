import { Carousel, Col, Layout, Row, Typography } from "antd";
import AboutUsImage from "../assets/aboutUs.png";
import carcol1 from "../assets/carousel_collection_1.jpg";
import carcol2 from "../assets/carousel_collection_2.jpg";
import carcol3 from "../assets/carousel_collection_3.jpg";
import carcol4 from "../assets/carousel_collection_4.jpg";
import carcol5 from "../assets/carousel_collection_5.jpg";

const carouselCollection = [
	{
		image: AboutUsImage,
		alt: "image0",
	},
	{
		image: carcol1,
		alt: "image1",
	},
	{
		image: carcol2,
		alt: "image2",
	},
	{
		image: carcol3,
		alt: "image3",
	},
	{
		image: carcol4,
		alt: "image4",
	},
	{
		image: carcol5,
		alt: "image5",
	},
];

export interface IAboutUsProps {}

export function AboutUs() {
	return (
		<Layout style={{ padding: "3rem 10rem", background: "white" }}>
			<Row style={{ alignItems: "center" }}>
				<Col span={12}>
					<Typography.Title>About Us</Typography.Title>
					<Typography style={{ maxWidth: "500px" }}>
						Our milktea cafe was founded with a passion for creating the perfect
						blend of tea, milk, and flavors. We source the highest quality
						ingredients and use traditional brewing methods to ensure every sip
						is a delight.
						<br />
						<br />
						Join us on a journey of milktea exploration and indulge in our wide
						selection of unique and delicious offerings.
					</Typography>
				</Col>
				<Col span={12} style={{ textAlign: "center" }}>
					<Carousel autoplay style={{ width: "100%" }}>
						{carouselCollection?.map((value, index) => {
							return (
								<div style={{}} key={index}>
									<div
										style={{
											// border: "5px",
											borderRadius: "1rem",
											height: "600px",
											backgroundPosition: "center",
											backgroundSize: "cover",
											backgroundImage: `url(${value.image})`,
										}}
									></div>
								</div>
							);
						})}
					</Carousel>
				</Col>
			</Row>
		</Layout>
	);
}
