import React from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import "./home.css";
import { Link } from "react-router-dom";
import notessvg from "../../assets/notes.svg";
const { Content } = Layout;

const Home = () => {
	return (
		<Layout>
			<Content className="site-layout">
				<div className="site-layout-background" style={{ margin: `0 auto` }}>
					<div className="main-box">
						<h1 className="main-headline">
							Take Notes like A <span className="main-sub-headline">PRO</span>
						</h1>

						<img src={notessvg} alt="mainsvg" className="main-svg" />
					</div>
					<Button type="primary" className="main-button">
						<Link to="/login" style={{ color: "#f1cd3b" }}>
							Get Started
						</Link>
					</Button>
				</div>
			</Content>
		</Layout>
	);
};

export default Home;
