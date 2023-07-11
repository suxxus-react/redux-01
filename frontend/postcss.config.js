module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-import"),
    require("postcss-preset-env")({ browsers: "last 2 versions" }),
  ],
};

// module.exports = {
//   plugins: {
//     "postcss-preset-env": {
//       stage: 0,
//       browsers: "last 2 versions",
//       // importFrom: 'path/to/file.css'
//     },
//     "postcss-import": {},
//     "postcss-nested": {},
//   },
// };
