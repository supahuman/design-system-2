module.exports = [
  {
    path: "dist/index.js",
    limit: "10 KB",
    plugins: ['@size-limit/esbuild', '@size-limit/esbuild-why']
  }
];
