module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // prettier関連はextendsの最後に書く必要がある
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "react",
    'prefer-arrow',
  ],
  root: true,
  // ルールに従わないとエラーになる
  rules: {
    // ダブルクオートじゃないとエラー
    "quotes": [
      "error",
      "single"
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      }
    ],
    "no-mixed-spaces-and-tabs": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    "indent": "off",
  }
};
