import SignupForm from "@/app/components/authCompo/RegistrationForm";
import XlogoSvg from "@/app/components/logo/XlogoSvg";
import Modal from "@/app/components/utils/Modal";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <Modal>
      <div className="flex flex-col justify-center items-center p-5">
        {/* Logo Section */}
        <div className="w-full md:w-9/12 px-10">
          <XlogoSvg xClass="w-16 h-16 md:w-auto" />
        </div>

        {/* Login Form Section */}
        <div className=" w-full sm:w-9/12 mx-auto px-10">
          <SignupForm />
        </div>

        {/* Link Section */}
        <div className="mt-4">
          Already have an account ?{" "}
          <Link href="/auth/signin" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SignupPage;
