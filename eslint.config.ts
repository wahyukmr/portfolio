import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "path";
import {configs as tseslint} from 'typescript-eslint'

export default defineConfig([
	// ======================
	// Global ignores
	// ======================
	{
		ignores: [
			"node_modules/**",
			"dist/**",
			"build/**",
			"coverage/**",

			".react-router/**", // framework generated
			".netlify/**",
			".vite/**",

			// common noise
			"**/*.d.ts",
		],
	},

	eslint.configs.recommended,
	tseslint.strict,
	tseslint.stylistic,
	react.configs.flat.recommended,
	reactHooks.configs.flat.recommended,
	jsxA11y.flatConfigs.recommended,

	// ======================
	// JavaScript / TypeScript
	// ======================
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		settings: {
			react: { version: "detect" },
			"import/resolver": {
				typescript: createTypeScriptImportResolver({
					alwaysTryTypes: true,
					project: path.resolve("./tsconfig.json"),
				}),
			},
		},
		plugins: {
			"react-refresh": reactRefresh,
			"unused-imports": unusedImports,
			"simple-import-sort": simpleImportSort,
		},
		extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			// Disable rules that TypeScript already handles / conflicts
			"no-undef": "off",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",

			// React modern setup
			"react/react-in-jsx-scope": "off",

			// React refresh (Vite DX)
			"react-refresh/only-export-components": [
				"error",
				{
					"allowExportNames": ["meta", "links", "loader", "action", "middleware", "headers"],
					"allowConstantExport": true,
					"customHOCs": ["observer", "withAuth"],
				},
			],

			// Keep repo clean: unused imports + sorting
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",

			// import hygiene (lightweight)
			"import/first": "error",
			"import/no-duplicates": "error",
			"import/newline-after-import": "error",
			"import/no-unresolved": "off",

			// General quality
			"no-debugger": "error",
			"no-console": ["warn", { allow: ["warn", "error"] }],

			// TS pragmatic rules
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
		},
	},

	// =========================================
	// Tests: reduce noise
	// =========================================
	{
		files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
		rules: {
			"no-console": "off",
		},
	},
]);
