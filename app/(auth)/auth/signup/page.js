import SignupForm from "@/app/components/authCompo/RegistrationForm";
import XlogoSvg from "@/app/components/logo/XlogoSvg";
import Modal from "@/app/components/utils/Modal";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <Modal>
      <div className="flex flex-col justify-center items-center p-5 bg">
        {/* Logo Section */}
        <div className="w-full">
          <XlogoSvg xClass="w-16 h-16 md:w-auto" />
        </div>

        {/* Login Form Section */}
        <div className="w-96 h-auto mx-auto ">
          <SignupForm />
        </div>

        {/* Link Section */}
        <div className="mt-4">
          Already have an account ?{" "}
          <Link href="/auth/signin" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SignupPage;
