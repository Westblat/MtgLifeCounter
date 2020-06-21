module.exports = {
  env: {
    browser: true,
    jest: true
  },
  parser: "babel-eslint",
  extends: [
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DEV__": true
  },
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: "babel.config.js",
    },
  },
  plugins: [
    'react',
    'only-warn'
  ],
  rules: {
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-uses-react": 1,
    "react/destructuring-assignment": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "no-console": [1, { allow: ["warn", "error"] }],
    'max-len': [1, { "code": 120 }],
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "no-else-return": 0,
    "global-require": 0,
    "comma-dangle": 0,
    "func-names": 0,
    "quotes": [1, "single", {"avoidEscape": true , "allowTemplateLiterals": true}],
    "jsx-quotes": [1, "prefer-single"],
    "semi": 0,
    "operator-linebreak": 0,
    "import/order": ["error", {"groups": ["builtin", "external", "internal", "parent", "sibling", "index"]}],
    "no-shadow": 0,
    "indent": ["warn", 4, { "SwitchCase": 1 }],
    "react/jsx-indent": ["warn", 4],
    'react/jsx-indent-props': ['warn', 4],
    "camelcase": [
      "error",
      {
        "allow": ["UNSAFE_componentWillMount"],
        "properties": "never"
      }
    ],
    "import/extensions": 0,
    "no-floating-decimal": 0,
    "import/no-named-as-default": 0,
    "consistent-return": 0,
    'no-unused-expressions': 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "./"]
      }
    }
  }
};
