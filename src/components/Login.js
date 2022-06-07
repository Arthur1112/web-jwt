import { Form, Button, Input } from "antd";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <Form name="login" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
