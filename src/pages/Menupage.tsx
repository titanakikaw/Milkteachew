import { Button, Col, Divider, Layout, Row, Typography } from "antd";
import productSample from "../assets/product.svg";
import * as React from "react";

export interface IMenupageProps {}

export function Menupage(props: IMenupageProps) {
	return (
		<Layout style={{ padding: "3rem 10rem", background: "white" }}>
			<Typography.Title>Discover our Flavor’s</Typography.Title>
			<Typography>
				From classic to creative, our menu offers a wide range of milktea
				flavors and toppings to satisfy every craving.
			</Typography>
			<Row
				gutter={[16, 16]}
				style={{ marginTop: "2rem", justifyContent: "center" }}
			>
				{[...new Array(12)].map((value, index) => {
					return (
						<Col span={5}>
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
