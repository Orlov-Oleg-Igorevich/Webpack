import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {ignores: [
    'node_modules/*',
    'dist/*',
    'webpack.config.js'
  ]}
];