import React from "react";
import { Layout, Menu } from "antd";
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./dashboard.css";
const { Sider, Content } = Layout;

class Slider extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout className="dashboard">
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							nav 1
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							nav 2
						</Menu.Item>
						<Menu.Item key="3" icon={<UploadOutlined />}>
							nav 3
						</Menu.Item>
					</Menu>
				</Sider>

				<Content
					className="site-layout-background"
					style={
						{
							// margin: "24px 16px",
							// padding: 24,
							// minHeight: 280,
							// color: "white",
						}
					}
				>
					Content
				</Content>
			</Layout>
		);
	}
}

export default Slider;
