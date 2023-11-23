"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { useState } from "react";

const LogIn = () => {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const onPasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const onSubmit = async () => {
    if (!email || !password) {
      setMessage("Email and password is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        router.push("/main");
      } else {
        console.log("Login failed");
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred while attempting to log in.");
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Admin Log In</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={onEmailChange}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded  text-white transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 ..."
            onClick={onSubmit}
          >
            Log In
          </button>
          <div className="text-center text-red-500">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
