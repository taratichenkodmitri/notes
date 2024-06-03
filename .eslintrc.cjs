module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:unicorn/all"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "jsx-a11y"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "semi": ["error", "always"],
    "no-unused-vars": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-multi-spaces": "error",
		"comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
		quotes: ["error", "single"],
		"unicorn/filename-case": [
			"error",
			{
				"cases": {
					"camelCase": true,
					"pascalCase": true
				}
			}
		]
  },
}
