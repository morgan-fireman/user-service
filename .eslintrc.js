module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb/base',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
};
