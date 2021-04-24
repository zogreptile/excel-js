module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['@babel'],
  extends: ['eslint:recommended', 'google'],
  rules: {
    'max-len': 'off',
    'require-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@babel/no-invalid-this': 'off',
    'indent': ['error', 2],
  },
};
