"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SigninFrom = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = Object.fromEntries(new FormData(form));
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        router.push("/");
      } else if (response.status === 401) {
        const errorData = await response.json();
        setMessage(errorData.message);
      } else {
        setMessage("Unexpected response from the server.");
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl pt-5">
      <h2 className="text-3xl font-bold text-center text-white">Log in</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Email */}
        <div className="space-y-3">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Email or Phone"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-3 mt-6">
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Password"
            required
          />
        </div>

        <div className="mt-8 text-center">
          {message && (
            <div className="text-red-500 text-center my-4 font-semibold text-sm">
              {message}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600"
          >
            {loading ? "Wait for Access" : " Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninFrom;
