/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-picture": "url('./assets/profile_picture.jpg')",
        "about-picture": "url('./assets/about_image.webp')",
        "project-1": "url('./assets/project1.png')",
      },
    },
  },
  plugins: [],
};
