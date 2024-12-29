module.exports = [
    {
      files: ["**/*.ts"],
      languageOptions: {
        parser: require("@typescript-eslint/parser"), // Use TypeScript parser
        parserOptions: {
          ecmaVersion: 2020, // Allow modern ECMAScript features
          sourceType: "script", // Use CommonJS
          project: "./tsconfig.json", // Point to your TypeScript config
        },
      },
      plugins: {
        "@typescript-eslint": require("@typescript-eslint/eslint-plugin"), // Correct way to require the plugin
      },
      rules: {
        // Relaxed rules
        "no-unused-vars": ["warn"],
        "no-console": "off",
        "no-var": "warn", // Encourage modern syntax without enforcing
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off", // Allow implicit return types
      },
    },
  ];
  