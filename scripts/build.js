const fse = require('fs-extra')
const path = require('path')

const babel = require('babel-core')


const packageDir = path.resolve(__dirname, '..')
const libDir = path.resolve(packageDir, 'lib')
const srcDir = path.resolve(packageDir, 'src')
const outCjsDir = path.resolve(libDir, 'cjs')
const outEsDir = packageDir
let filenames

function makeOutputFileCallback(outputFilename) {
  return function (err, result) {
    if (err) {
      console.error(err)
    }
    fse.outputFileSync(outputFilename, result.code, { encoding: 'utf8' })
  }
}

filenames = [
  'flattenErrors.js',
  'index.js',
]
filenames.forEach((filename) => {
  let callback, inputFilename, outputFilename

  inputFilename = path.resolve(srcDir, filename)
  outputFilename = path.resolve(outCjsDir, filename)
  callback = makeOutputFileCallback(outputFilename)
  babel.transformFile(inputFilename, callback)

  outputFilename = path.resolve(outEsDir, filename)
  fse.copy(inputFilename, outputFilename)
})
