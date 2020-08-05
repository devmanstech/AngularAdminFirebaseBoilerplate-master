module.exports = {
  extends: ['plugin:@angular-eslint/recommended'],
  rules: {
    // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],
    // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        // AirBnB Styleguide rules
        'airbnb-typescript/base',
        // Settings for Prettier
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        'no-console': 'off',
        'max-classes-per-file': 'off',
        'no-plusplus': 'off',
        'spaced-comment': 'off',
        'import/prefer-default-export': 'off',
        '@angular-eslint/component-selector': 'off',
        'class-methods-use-this': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
      },
    },
    // Add this rules, if you use inline templates inside *.component.ts files
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
  ],
};
