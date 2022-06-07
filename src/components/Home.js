import { useState } from "react";
import { Alert, Button } from "antd";

export default function Home() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <h1>Home</h1>
      {message && <Alert message={message} type="success" />}
      {error && <Alert message={error} type="error" />}
      <Button>Get Private Stuff</Button>
    </>
  );
}
