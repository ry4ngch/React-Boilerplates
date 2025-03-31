/** @type 
{import('tailwindcss').Config}
 */

module.exports = {
    prefix: 'tw-',
    mode: 'jit', // Optional (Tailwind v3 enables JIT automatically)
    // content: [ // Use `content`, not `purge`
    //     './src/**/*.{js,jsx,ts,tsx}',  // Scan JS/TSX files
    //     './public/*.html',         // Include HTML files
    //     './src/**/*.{css,scss}',       // Scan SCSS files
    // ],
    purge: [
        './public/**/*.html', 
        './src/**/*.{js, jsx, ts, tsx}', 
        './src/**/*.{css,scss}'
    ],
    content: [],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
  };