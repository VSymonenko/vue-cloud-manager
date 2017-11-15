// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'never'],
    'semi': ["error", "never"],
    'no-console': 0,
    'prefer-template': 0,
    'linebreak-style': 0,
    'no-unused-expressions': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'func-names': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    // generate component
    'vars-on-top': 0,
    // 'no-var': 0,
    'prefer-const': 0
  }
}
