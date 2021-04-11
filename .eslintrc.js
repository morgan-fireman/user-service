module.exports = {
  env: {
    node: true,
  },
  extends: 'airbnb/base',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
};
