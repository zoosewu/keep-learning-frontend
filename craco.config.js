const { pathsToModuleNameMapper } = require('ts-jest/')
const path = require('path')
const aliases = require('./tsconfig.aliases.json')

// function GetJestAliases (configPaths) {
//   const alias = Object.entries(configPaths).reduce(
//     (webpackAliases, [configAlias, configPathList]) => {
//       const aliasKey = '^' + configAlias.replace('/*', '(.*)') + '$'
//       const relativePathToDir = configPathList[0].split('/*')[0].replace('./src', '/src')
//       return {
//         ...webpackAliases,
//         [aliasKey]: relativePathToDir
//       }
//     },
//     {}
//   )
//   return alias
// }
function GetWebpackAliases (configPaths) {
  const alias = Object.entries(configPaths).reduce(
    (webpackAliases, [configAlias, configPathList]) => {
      const [aliasKey] = configAlias.split('/')
      const [relativePathToDir] = configPathList[0].split('/*')
      return {
        ...webpackAliases,
        [aliasKey]: path.resolve(__dirname, relativePathToDir)
      }
    },
    {}
  )
  return alias
}
module.exports = {
  jest: {
    configure: {
      roots: ['<rootDir>'],
      modulePaths: [aliases.compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
      moduleNameMapper: pathsToModuleNameMapper(aliases.compilerOptions.paths, { prefix: '<rootDir>/' })
    }
  },
  eslint: {
    parserOptions: {
      project: ['tsconfig.json']
    }
  },
  webpack: {
    alias: GetWebpackAliases(aliases.compilerOptions.paths)
  }
}
