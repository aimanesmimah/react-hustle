
module.exports = {
    verbose: true,
    bail: true,
    notify: false,
    coverageReporters: ["text"],
    collectCoverage: true,
    collectCoverageFrom: [
      "./src/components/**/*.js",
      "./src/components/**/*.jsx"
    ],
    setupTestFrameworkScriptFile: "./src/test/config/enzyme.config.js"
};