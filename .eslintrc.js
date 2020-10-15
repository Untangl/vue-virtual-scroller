module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //'no-unused-vars': ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'no-unused-vars': 0,
    'no-undef': 0,
    'vue/valid-v-for': 0,
    'vue/no-unused-components': 1,
    'no-constant-condition': 1,

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // trailing comma
    'comma-dangle': ['error', 'always-multiline'],

  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};

