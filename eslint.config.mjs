import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Best Practices
      "no-unused-vars": "warn",
      "no-console": "off",

      // Function Specifics
      "prefer-arrow-callback": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-param-reassign": "error",
      "func-style": ["error", "declaration", { "allowArrowFunctions": true }],

      // Strictness
      "strict": ["error", "global"],
    },
  },
];
