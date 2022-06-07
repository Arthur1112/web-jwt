import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
