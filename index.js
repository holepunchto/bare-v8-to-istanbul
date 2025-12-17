const { isBare } = require('which-runtime')

const originalProcess = global.process
if (isBare) global.process = require('bare-process')

try {
  module.exports = require('v8-to-istanbul', { with: { imports: './package.json' } })
} finally {
  if (isBare) global.process = originalProcess
}
