module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-preset-env": {},
        '@tailwindcss/postcss': {},
        "postcss-nested": {},
        "postcss-easy-import": { prefix: "_", extensions: [".css", ".scss"] },
    }
};