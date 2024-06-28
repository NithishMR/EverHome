function SignupPage() {
  return (
    <form className="flex flex-col space-y-2 mb-20 ">
      <div className="flex flex-col items-start">
        <label htmlFor="username" className="text-xl font-medium mb-4">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="password" className="text-xl font-medium mb-4">
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
      <div className="flex flex-col items-start">
        <label htmlFor="confirmPassword" className="text-xl font-medium mb-4">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter your password"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <input
        type="submit"
        value="Sign Up"
        className="mt-10 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      />
    </form>
  );
}

export default SignupPage;
