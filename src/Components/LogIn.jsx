import React from "react";

const LoginPage = () => {
  return (
    <form className="flex flex-col space-y-2 mb-20">
      <div className="flex flex-col items-start">
        <label htmlFor="email" className=" text-xl font-medium mb-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email ID"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex  flex-col items-start">
        <label htmlFor="password" className=" text-xl font-medium mb-4">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mb-5"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className=" mt-10 text-xl  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      />
    </form>
  );
};

export default LoginPage;
