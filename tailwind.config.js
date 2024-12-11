/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1DA1F2",
        primaryDark: "#14171A",
        secondaryDark: "#657786",
        tertiaryDark: "#AAB8C2",
        quaternaryDark: "#E1E8ED",
        quinaryDark: "#F5F8FA",
        toggle: "rgb(62, 65, 68)",
        linkColor: "rgb(17, 18, 18)",
      },
      boxShadow: {
        custom: "1px 2px 16px 2px rgb(111, 120, 120)", // Example custom shadow
      },
    },
  },
  plugins: [],
};
