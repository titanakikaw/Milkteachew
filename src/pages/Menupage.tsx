import { Col, Divider, Layout, Row, Typography } from "antd";
import productSample from "../assets/product.svg";

export interface IMenupageProps {}

export function Menupage() {
	return (
		<Layout
			style={{ background: "white", height: "100%" }}
			className="reponsive-layout"
		>
			<Typography.Title>Discover our Flavor’s</Typography.Title>
			<Typography>
				From classic to creative, our menu offers a wide range of milktea
				flavors and toppings to satisfy every craving.
			</Typography>
			<Row
				gutter={[16, 16]}
				style={{ marginTop: "2rem", justifyContent: "center" }}
			>
				{[...new Array(12)].map((index) => {
					return (
						<Col xs={12} lg={5} key={index}>
							<div
								style={{
									textAlign: "center",
								}}
							>
								<img src={productSample} style={{ margin: "auto" }} />
								<Divider style={{ marginBottom: "5px" }} />
								<div style={{ textAlign: "left", padding: "1rem" }}>
									<Typography.Title
										style={{ fontSize: "15px", textTransform: "uppercase" }}
									>
										Taro Milktea
									</Typography.Title>
									<Typography style={{ color: "grey", fontSize: "11px" }}>
										A creamy, fragrant blend of premium black tea, milk, and the
										rich, earthy flavor of taro
									</Typography>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
		</Layout>
	);
}
