
module.exports = {
  babelrcRoots: [
    "node_modules/@leansdk/leanes",
    "node_modules/@leansdk/leanes-mapper-addon",
  ],

  presets: [
    ['@babel/preset-env'],
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    ["flow-runtime", {
      "assert": true,
      "annotate": true
    }],
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime"
  ],
}
