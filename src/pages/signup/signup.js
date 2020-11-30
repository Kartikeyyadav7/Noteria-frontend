import React from "react";
import { Form, Input, Tooltip, Button } from "antd";
import "antd/dist/antd.css";
import "./signup.css";
import { QuestionCircleOutlined } from "@ant-design/icons";

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const RegistrationForm = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<Form
			{...formItemLayout}
			form={form}
			name="register"
			onFinish={onFinish}
			scrollToFirstError
			className="form"
		>
			<Form.Item
				name="email"
				label="E-mail"
				rules={[
					{
						type: "email",
						message: "The input is not valid E-mail!",
					},
					{
						required: true,
						message: "Please input your E-mail!",
					},
				]}
			>
				<Input className="inputValue" />
			</Form.Item>

			<Form.Item
				name="password"
				label="Password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="Name"
				label={
					<span>
						Name&nbsp;
						<Tooltip title="What do you want others to call you?">
							<QuestionCircleOutlined />
						</Tooltip>
					</span>
				}
				rules={[
					{
						required: true,
						message: "Please input your nickname!",
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="lastName"
				label={
					<span>
						LastName&nbsp;
						<Tooltip title="How do you want to be called ?">
							<QuestionCircleOutlined />
						</Tooltip>
					</span>
				}
				rules={[
					{
						required: true,
						message: "Please input your nickname!",
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegistrationForm;
