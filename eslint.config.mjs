import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Example of custom rules
      "no-console": "warn", // Warns when console statements are used
      "react/react-in-jsx-scope": "off", // Turns off the rule requiring React to be in scope in JSX files
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disables the explicit module boundary types rule
      "@typescript-eslint/no-explicit-any":"off",
      "@typescript-eslint/no-unused-vars":"off"

    },
  }
];

export default eslintConfig;
