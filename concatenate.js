const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/HelloWorldAngularElements/main-es5.js',
    './dist/HelloWorldAngularElements/main-es2015.js',
    './dist/HelloWorldAngularElements/polyfills-es5.js',
    './dist/HelloWorldAngularElements/polyfills-es2015.js',
    './dist/HelloWorldAngularElements/runtime-es5.js',
    './dist/HelloWorldAngularElements/runtime-es2015.js'
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/analytics-counter.js');
  await fs.copyFile('./dist/HelloWorldAngularElements/styles.css', 'elements/styles.css')

  var assetsExist = fs.existsSync('./dist/HelloWorldAngularElements/assets/');
  if (assetsExist) {
    await fs.copy('./dist/HelloWorldAngularElements/assets/', 'elements/assets/')
  }
})();
