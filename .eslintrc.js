/**
 * ESLint configuration
 * @see https://eslint.org
 */

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  globals: {
    IS_DEVELOPMENT: 'readonly',
  },
  parserOptions: {
    ecmasVersion: 2022,
  },
  rules: {
    'no-console': 'off',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true,
          Property: false,
          VariableDeclarator: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
