function SignupPage() {
  return (
    <form className="flex flex-col space-y-4 mb-20 max-w-md mx-auto p-6 bg-[#f9f9f9] rounded-lg shadow-lg">
      <div className="flex flex-col items-start">
        <label
          htmlFor="username"
          className="text-lg font-semibold mb-2 text-[#333]"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col items-start">
        <label
          htmlFor="password"
          className="text-lg font-semibold mb-2 text-[#333]"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col items-start">
        <label
          htmlFor="confirmPassword"
          className="text-lg font-semibold mb-2 text-[#333]"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter your password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <input
        type="submit"
        value="Sign Up"
        className="mt-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200 ease-in-out"
      />
    </form>
  );
}

export default SignupPage;
