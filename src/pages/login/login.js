import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../signup/signup.css";

const NormalLoginForm = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<Form
			name="normal_login"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			className="form"
		>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: "Please input your Username!",
					},
				]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Email"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your Password!",
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
				</Button>
				Or{" "}
				<Link to="/signup" style={{ color: "#f1cd3b" }}>
					Register
				</Link>
			</Form.Item>
		</Form>
	);
};

export default NormalLoginForm;
