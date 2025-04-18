const { isBare } = require('which-runtime')

if (isBare) {
  const resolvedPath = require.resolve('v8-to-istanbul')
  const originalProcess = global.process
  const originalRequireCache = require.cache[resolvedPath]

  delete require.cache[resolvedPath]
  global.process = require('bare-process')

  try { module.exports = require('v8-to-istanbul') }
  finally {
    global.process = originalProcess
    require.cache[resolvedPath] = originalRequireCache
  }
} else {
  module.exports = require('v8-to-istanbul')
}
