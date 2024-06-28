const flowbite = require("flowbite-react/tailwind");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    // ...
    flowbite.content(),
  ],
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), flowbite.plugin()],
  daisyui: {
    themes: ["light", "dark"], // optional: select which themes to include
  },
};
