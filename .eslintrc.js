module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    'space-infix-ops': ['error', { int32Hint: false }],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'no-octal': 2,
    'no-redeclare': 2,
    'comma-spacing': 2,
    'no-new-object': 2,
    'arrow-spacing': 2,
    'no-use-before-define': 'off',
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-tabs': 2,
    'space-before-function-paren': 0,
    'spaced-comment': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  }
}
