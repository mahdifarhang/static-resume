module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // 0 - 'off'
    // 1 - 'warn'
    // 2 - 'error'
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', next: 'return', prev: '*' },
      // Bellow line got commented from extended rules, NOT TO GET ERRORS FOR NOT HAVING BLANK LINE AFTER VARIABLE DECLARATIONS
      // { blankLine: 'always', next: '*', prev: ['const', 'let'] },
      { blankLine: 'any', next: ['const', 'let'], prev: ['const', 'let'] }
    ]
  }

}
