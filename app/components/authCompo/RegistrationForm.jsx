"use client";
import { monthsForSignup } from "@/data/navigationData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignupForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password, birthOfDay, birthOfMonth, birthOfYear } =
      Object.fromEntries(new FormData(form));

    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          birthOfDay,
          birthOfMonth,
          birthOfYear,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      } else {
        const data = await response.json();
        setErrorMessage("");
        setErrorMessage(data.message);
        form.reset();
        router.push("/auth/signin");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-start ">Create your account</h2>
      <form onSubmit={handleSubmit} className=" relative">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className=" block space-y-3 my-6 w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Name"
          />
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className=" block space-y-3 my-6 w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Email or Phone"
          />
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            id="password"
            className=" block space-y-3 my-6 w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Strong Password"
          />
        </div>
        {/* DOB Input Section */}
        <div className="">
          <label
            htmlFor="Dob"
            className="block text-sm font-medium text-gray-700"
          >
            <span className="text-gray-200 font-semibold">Date of birth</span>
            <br />
            <span className="text-gray-500">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </span>
          </label>
          <div className="flex space-x-4 mt-3">
            {/* Day Field */}
            <select
              name="birthOfDay"
              id="birthOfDay"
              className="w-1/3 p-3 bg-gray-900 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Day
              </option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Month Field */}
            <select
              name="birthOfMonth"
              id="birthOfMonth"
              className="w-1/3 p-3 bg-gray-900 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Month
              </option>
              {monthsForSignup.map((month, i) => (
                <option key={i} value={i + 1}>
                  {month}
                </option>
              ))}
            </select>

            {/* Year Field */}
            <select
              name="birthOfYear"
              id="birthOfYear"
              className="w-1/3 p-3 bg-gray-900 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Year
              </option>
              {[...Array(80)].map((_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className=" mt-8">
          {errorMessage && (
            <div className="text-red-500 text-center  font-semibold text-sm">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600"
          >
            {loading ? "Creating.." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;