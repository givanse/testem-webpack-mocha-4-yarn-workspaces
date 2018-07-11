const testemConfig = require('./configs/testem.config.js');

testemConfig.serve_files = testemConfig.serve_files || [];
testemConfig.test_page = testemConfig.test_page || [];

module.exports = function getTestemConfig(moduleNames) {

  for (moduleName of moduleNames) {
    testemConfig.serve_files.push(`${moduleName}/dist/test-bundle.js`);
    testemConfig.test_page.push(`run-tests/test.html?name=${moduleName}`);
  }

  return testemConfig;
}
