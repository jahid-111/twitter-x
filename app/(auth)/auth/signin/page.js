import Link from "next/link";
import LoginFrom from "@/app/components/authCompo/LoginFrom";
import XlogoSvg from "@/app/components/logo/XlogoSvg";
import React from "react";

const SigninPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      {/* Logo Section */}
      <div className="w-full sm:w-4/12 mb-36 flex justify-start">
        <XlogoSvg xClass="w-16 h-16 md:w-auto" />
      </div>

      {/* Login Form Section */}
      <div className="w-full sm:w-5/12 md:w-4/12">
        <LoginFrom />
      </div>

      {/* Link Section */}
      <div className="w-full sm:w-4/12 mt-4 text-start">
        No Account ?{" "}
        <Link href="/auth/signup" className="text-blue-500 hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
