const SignupPage = () => (
  <form className="flex flex-col gap-4">
    <div className="flex flex-col">
      <label htmlFor="username" className="text-lg font-medium mb-1">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="text-lg font-medium mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="confirmPassword" className="text-lg font-medium mb-1">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm your password"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <button
      type="submit"
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all"
    >
      Sign Up
    </button>
  </form>
);

export default SignupPage;
