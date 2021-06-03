module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-var": "error",
    "indent": [
      "error",
      2, {"SwitchCase": 1}
    ],
    "keyword-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "no-unreachable": [
      "error"
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error", "always"
    ],
    "eqeqeq": [
      "error", "always"
    ],
    "space-infix-ops": [
      "error", {
        "int32Hint": false
      }
    ],
    "no-multiple-empty-lines": [
      "error", {
        "max": 1
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "array-bracket-spacing": [2, "never"],
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "comma-dangle": [2, "never"],
    "comma-spacing": [
      2, {
        "before": false,
        "after": true
      }],
    "comma-style": [2, "last"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "no-extra-semi": "error",
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "no-console": "off"
  }

};
