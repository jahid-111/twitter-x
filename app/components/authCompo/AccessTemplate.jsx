import Link from "next/link";
import React from "react";

const AccessTemplate = () => {
  return (
    <div className="  flex flex-col justify-start">
      <div>
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-start text-gray-100">
          Happening now
        </h1>
      </div>

      <div className="w-full sm:size-11/12 md:size-9/12 xl:size-6/12">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-start my-6 text-gray-100">
          Join today.
        </h2>

        {/* Sign in Methods */}
        <div className="flex flex-col gap-2 ">
          <button className="border rounded-full bg-white text-gray-900 font-semibold text-sm py-2 w-full mx-auto sm:px-10 hover:bg-gray-100">
            Sign up with Google
          </button>

          <button className="border rounded-full bg-white text-gray-900 font-semibold text-sm py-2 w-full mx-auto sm:px-10 hover:bg-gray-100">
            Sign up with Apple
          </button>

          <div className="flex items-center my-1 ">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <Link
            href="/auth/signup"
            className=" outline-none rounded-full bg-blue-500 text-white font-semibold text-sm py-3 w-full text-center mx-auto sm:px-10 hover:bg-blue-600"
          >
            Create account
          </Link>

          <div>
            <p className="mt-4 text-xs text-justify text-gray-500">
              By signing up, you agree to the
              <span className="text-blue-500 cursor-pointer">
                Terms of Service
              </span>{" "}
              and
              <span className="text-blue-500 cursor-pointer">
                {" "}
                Privacy Policy
              </span>
              , including
              <span className="text-blue-500 cursor-pointer"> Cookie Use</span>.
            </p>
            <h5 className="text-[1rem] font-semibold text-start mt-6 text-gray-200">
              Already have an account?
            </h5>
          </div>
          <Link
            href="/auth/signin"
            className="border text-[#1DA1F2] text-center rounded-full py-2 w-full mx-auto sm:px-10 hover:bg-gray-800"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessTemplate;
