const pkg = require("./package.json");
module.exports = {
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: ["react", "prettier", "standard", "jsx-a11y", "jest", "babel"],
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    node: true,
    jest: true
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  },
  rules: {
    "babel/no-invalid-this": 1,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["CustomLabel"],
        labelAttributes: ["inputLabel"],
        controlComponents: ["CustomInput"],
        depth: 3
      }
    ],
    "consistent-return": [2],
    "dot-notation": [2],
    "func-names": [2],
    "no-console": [1],
    "no-implicit-coercion": [
      2,
      {
        allow: ["!!"]
      }
    ],
    "no-magic-numbers": [
      2,
      {
        ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    ],
    "no-useless-concat": [2],
    "no-var": [2],
    "prefer-const": [2],
    "prefer-template": [2],
    radix: [2, "as-needed"],
    "react/display-name": [0],
    "react/prop-types": [
      2,
      {
        skipUndeclared: true
      }
    ],
    "react/no-did-mount-set-state": [1],
    "react/no-did-update-set-state": [1],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        singleQuote: true,
        semi: false
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    },
    sourceType: "module"
  },
  settings: {
    react: {
      version: (pkg.devDependencies && pkg.devDependencies.react) || "^16.4"
    }
  }
};
