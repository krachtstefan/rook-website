import eslintJs from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      prettier, // should always be last to avoid conflicts
    ],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tailwindcss: tailwindcssPlugin,
      react: reactPlugin,
      "@tanstack/query": tanstackQueryPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        config: "./tailwind.config.js",
        callees: ["clsx", "cn", "twMerge", "twMergeClsx"],
      },
      "import/resolver": {
        typescript: {},
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // Please provide reasons for adding / overriding non-obvious rules,
      // as it is hard to evaluate this at a later time.

      // Tailwind rules
      "tailwindcss/no-custom-classname": "warn",

      // prettier sorts tailwind classes, this avoids conflicts
      "tailwindcss/classnames-order": "off",

      // JavaScript/TypeScript coding standards
      // nested ternaries are hard to read
      "no-nested-ternary": "error",

      // the following two are mainly for consistency
      "object-shorthand": "error",
      "arrow-body-style": "error",

      // React Refresh rules
      // this ensures we do not create exports that will break hot reloading
      "react-refresh/only-export-components": [
        "error",
        { allowConstantExport: true },
      ],

      // This will help avoid unnecessary curly braces in JSX
      "react/jsx-curly-brace-presence": "error",

      // console logs are fine in development, but eslint can help us
      // remember to remove them. console.error and console.warn are
      // allowed for now, but please avoid them in code that is regularly
      // reachable (but use them in guards, for example).
      "no-console": ["error", { allow: ["error", "warn"] }],

      // This prevents us from defining unused variables, except ones
      // marked with the _ prefix to indicate the variable is unused on
      // purpose, e.g. in function signatures.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // TanStack Query rules
      "@tanstack/query/exhaustive-deps": "error",

      // This modifies the rule from eslint-plugin-import, which does
      // not recognize /vite.svg where / stands for the "public" folder,
      // a shorthand provided by vite.
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^/"], // Ignore all imports starting with "/"
        },
      ],
    },
  }
);
