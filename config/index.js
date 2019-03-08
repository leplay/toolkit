const isDev = process.env.NODE_ENV === 'development'

const config = {
  name: 'Toolkit',
  base: 'https://toolkit.city',
  functions: 'https://toolkit.city/.netlify/functions',
  git: 'https://github.com/leplay/toolkit.city'
}

if (isDev) {
  config.base = 'http://localhost:3000'
  config.functions = 'http://localhost:9000/.netlify/functions'
}

export default config
