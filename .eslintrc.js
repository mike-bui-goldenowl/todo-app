module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
    "import/resolver": {
      "babel-module": {
        "root": [
          "./src"
        ],
        "@asset": [
          "./src/assets"
        ],
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    },
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    }
  },
  "rules": {
    "no-alert": "off",
    "no-console": "off",
    "react/sort-comp": "off",
    "react/no-did-mount-set-state": "off",
    "no-debugger": "off",
    "global-require": "off",
    "no-restricted-globals": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ],
    "import/first": "off",
    "max-len": [
      "error",
      120,
      {
        "ignoreTemplateLiterals": true
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true
      }
    ],
    "no-underscore-dangle": "off",
    "prefer-promise-reject-errors": "off",
    "linebreak-style": "off",
    "no-plusplus": "off",
    "no-nested-ternary": "off",
    "no-lonely-if": "off",
    "no-use-before-define": [
      "error",
      {
        "variables": false
      }
    ],
    "react/prop-types": [
      0
    ],
    "react/no-string-refs": [
      0
    ],
    "object-curly-newline": [
      "error",
      {
        "multiline": true
      }
    ],
    "react/jsx-no-bind": [
      0
    ],
    "jsx-a11y/no-autofocus": [ 0, {
      "ignoreNonDOM": true
  }]
  }
};