// stylelint.config.js
module.exports = {
  files: ['**/*.scss', '**/*.css'],
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
