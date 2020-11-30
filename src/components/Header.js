import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "../pages/home/home.css";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
	return (
		<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
			<Menu theme="dark" mode="horizontal" className="Menu-bar">
				<Menu.Item key="1" style={{ flexGrow: "1", color: "#f1cd3b" }}>
					<Link to="/" style={{ color: "#f1cd3b" }}>
						Noteria
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/login" style={{ color: "#f1cd3b" }}>
						Login
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/signup" style={{ color: "#f1cd3b" }}>
						SignUp
					</Link>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default Navbar;
