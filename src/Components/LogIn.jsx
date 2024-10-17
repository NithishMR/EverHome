const LogIn = () => (
  <form className="flex flex-col gap-4">
    <div className="flex flex-col">
      <label htmlFor="email" className="text-lg font-medium mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
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

    <button
      type="submit"
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all"
    >
      Log In
    </button>
  </form>
);

export default LogIn;
