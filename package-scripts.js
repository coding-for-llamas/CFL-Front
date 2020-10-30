/* eslint-disable @typescript-eslint/no-var-requires */
const {
  series, crossEnv, concurrent, rimraf,
} = require('nps-utils');

module.exports = {
  scripts: {
    test: {
      default: 'nps test.jest',
      jest: {
        default: series(
          rimraf('test/coverage-jest'),
          crossEnv('BABEL_TARGET=node jest'),
        ),
        accept: crossEnv('BABEL_TARGET=node jest -u'),
        watch: crossEnv('BABEL_TARGET=node jest --watch'),
      },
      lint: {
        default: 'eslint . --ext .js,.tsx,.ts',
        fix: 'eslint . --ext .js,.tsx,.ts --fix',
      },
      react: {
        default: crossEnv('BABEL_TARGET=node jest --no-cache --config jest.React.json --notify'),
        accept: crossEnv('BABEL_TARGET=node jest -u --no-cache --config jest.React.json --notify --updateSnapshot'),
        watch: crossEnv('BABEL_TARGET=node jest --watch --no-cache --config jest.React.json --notify'),
      },
      all: concurrent({
        browser: series.nps('test.lint', 'test.jest', 'test.react', 'e2e'),
        jest: 'nps test.jest',
        lint: 'nps test.lint',
      }),
    },
  },
};
