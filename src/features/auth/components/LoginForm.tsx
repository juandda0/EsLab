import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username.toLowerCase(), password);
    if (!success) setError("Invalid credentials");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 max-w-sm mx-auto mt-16"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-green-700">Login</h2>
      <input
        className="border border-gray-300 rounded w-full p-2 mb-3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-300 rounded w-full p-2 mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
