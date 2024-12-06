import Link from "next/link";
import LoginFrom from "@/app/components/authCompo/LoginFrom";
import XlogoSvg from "@/app/components/logo/XlogoSvg";
import React from "react";
import Modal from "@/app/components/utils/Modal";

const SigninPage = () => {
  return (
    <Modal modalTitle="Ready ? What Happen to see !?">
      <div className="flex flex-col justify-center items-center p-5 bg">
        {/* Logo Section */}
        <div className="w-full">
          <XlogoSvg xClass="w-16 h-16 md:w-auto" />
        </div>

        {/* Login Form Section */}
        <div className="size-96 mx-auto ">
          <LoginFrom />
        </div>

        {/* Link Section */}
        <div className="mt-4">
          No Account ?{" "}
          <Link href="/auth/signup" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SigninPage;
