const { resolve } = require('path')

const outputPath = resolve(__dirname, 'dist')

const copyFromPath =  resolve(__dirname, '../../src/example/handle/title.js')

const copyToPath =  resolve(__dirname, 'dist')
module.exports ={
  outputPath,
  copyFromPath,
  copyToPath
} 