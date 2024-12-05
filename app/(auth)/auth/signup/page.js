import SignupForm from "@/app/components/authCompo/RegistrationForm";
import XlogoSvg from "@/app/components/logo/XlogoSvg";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      {/* Logo Section */}
      <div className="w-full sm:w-4/12 mb-10 flex justify-start">
        <XlogoSvg xClass="w-16 h-16 md:w-auto" />
      </div>

      {/* Login Form Section */}
      <div className="w-full sm:w-5/12 md:w-4/12">
        <SignupForm />
      </div>

      {/* Link Section */}
      <div className="w-full sm:w-4/12 mt-4 text-start">
        Already have an Account ?{" "}
        <Link href="/auth/signin" className="text-blue-500 hover:underline">
          Signin
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
