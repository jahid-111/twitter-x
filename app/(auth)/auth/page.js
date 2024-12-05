import AccessTemplate from "@/app/components/authCompo/AccessTemplate";
import XlogoSvg from "@/app/components/logo/XlogoSvg";
import React from "react";

const AuthHomePage = () => {
  return (
    <>
      <div className="h-screen p-5 sm:flex gap-16 justify-center items-center my-auto ">
        <div className="flex justify-start sm:justify-center items-start  sm:w-6/12">
          <XlogoSvg xClass={`w-16 h-16 sm:h-80 sm:w-80 md:w-auto`} />
        </div>
        <div className=" mt-10 sm:mt-0 sm:w-6/12">
          <AccessTemplate />
        </div>
      </div>
    </>
  );
};

export default AuthHomePage;
