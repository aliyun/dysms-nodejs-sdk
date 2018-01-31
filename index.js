'use strict';
function supportAsyncFunctions() {
  try {
    new Function('(async function () {})()');
    return true;
  } catch (ex) {
    return false;
  }
}
console.log(supportAsyncFunctions())
module.exports = supportAsyncFunctions() ?
  require('./src/client.js') : require('./lib/client.js');
