// reference: https://www.npmjs.com/package/dotenv
const fs = require('node:fs')

function config (options = {}) {
  let dotenv
  const path = options.path ?? '.env'
  try {
    dotenv = fs.readFileSync(path, 'utf-8')
  } catch (e) {
    return
  }
  if (!dotenv) return

  const lines = dotenv.split('\n')
  for (const line of lines) {
    const [key, value] = line.split('=')
    process.env[key] = value.split('"').join('')
  }
}

module.exports = { config }
