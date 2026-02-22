const fs = require('fs');
const path = require('path');

// 1. Create tailwind.config.js
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

// 2. Create postcss.config.js
const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

// Write the files to the root directory
fs.writeFileSync(path.join(__dirname, 'tailwind.config.js'), tailwindConfig);
fs.writeFileSync(path.join(__dirname, 'postcss.config.js'), postcssConfig);

console.log("✅ tailwind.config.js created!");
console.log("✅ postcss.config.js created!");