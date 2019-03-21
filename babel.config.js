const path = require('path')

const REGEXP_RELATIVE_STYLE = /^\.(.+)\.s?css$/

const REGEXP_STORYBOOK = /\.stories\.[jt]sx?$/
const REGEXP_TESTS = [/\/__tests__\/.*\.[jt]sx?$/, /.*(spec|test).[tj]sx?$/]

module.exports = {
  babelrcRoots: ['.', './libs/*'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'preval',
    [
      'module-resolver',
      {
        resolvePath(srcPath, currFile) {
          if (REGEXP_RELATIVE_STYLE.test(srcPath)) {
            const absImportPath = path.resolve(path.dirname(currFile), srcPath)
            const fromProjectRoot = absImportPath
              .replace(`${__dirname}/`, '')
              .replace(/^libs\/[^/]+\//, '')
            const toProjectRoot = path.relative(
              path.dirname(currFile),
              path.dirname(currFile).replace(/(\/libs\/[^/]+\/).*$/, '$1')
            )
            return path.join(toProjectRoot, fromProjectRoot)
          }
          return srcPath
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
  env: {
    production: {
      ignore: [REGEXP_STORYBOOK, ...REGEXP_TESTS],
      plugins: [
        [
          'transform-remove-console',
          {
            exclude: ['error', 'warn'],
          },
        ],
      ],
    },
    test: {
      ignore: [REGEXP_STORYBOOK],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    development: {
      ignore: [REGEXP_STORYBOOK, ...REGEXP_TESTS],
    },
  },
}
