import { Form, Button, Input } from "antd";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <Form name="login" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
}
