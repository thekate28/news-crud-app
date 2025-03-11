module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        lib: ["dom", "dom.iterable", "esnext"],
        project: ["./tsconfig.eslint.json"],
    },
    extends: ["plugin:@typescript-eslint/recommended", "prettier"],
    plugins: [
        "disable-autofix",
        "@typescript-eslint",
        "react",
        "react-hooks",
        "unused-imports",
        "prettier",
        "import"
    ],
    env: {
        commonjs: true,
        es6: true,
        node: true,
        serviceworker: true,
        worker: true,
        browser: true,
    },
    settings: {
        "import/extensions": [".ts", ".tsx"],
        "import/cache": 1,
        "import/internal-regex": "^@/",
        node: {
            tryExtensions: [".ts", ".tsx"],
        },
        "import/ignore": ["\\.(scss|less|css)$"],
    },
    globals: {
        require: "readonly",
    },
    rules: {
        "import/no-anonymous-default-export": "off",
        "node/no-extraneous-import": "off",
        "node/no-missing-import": "off",
        "no-console": ["warn", { allow: ["error"] }],
        "no-unreachable": "warn",
        "prettier/prettier": [
            "warn",
            {
                singleQuote: false,
                semi: true,
                printWidth: 120,
                tabWidth: 4,
                quoteProps: "as-needed",
                proseWrap: "always",
                trailingComma: "es5",
                useTabs: false,
                jsxSingleQuote: false,
                endOfLine: "lf",
                bracketSpacing: true,
                arrowParens: "always",
                singleAttributePerLine: true,
            },
        ],
        "import/order": [
            "warn",
            {
                groups: [["builtin", "external"], "internal", "type", "parent", "sibling", "index"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                warnOnUnassignedImports: false,
                pathGroupsExcludedImportTypes: ["./*.module.scss"],
                pathGroups: [
                    {
                        pattern: "./*.module.scss",
                        group: "index"
                    },
                ],
            },
        ],
        "import/no-relative-packages": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                includeInternal: true,
                includeTypes: true,
            },
        ],
        "@typescript-eslint/no-useless-constructor": "off",
        "react-hooks/exhaustive-deps": [
            "error",
            {
                additionalHooks: "(useLocalStore)",
            },
        ],
        "sort-imports": "off",
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "off",
        "object-shorthand": [
            "warn",
            "properties",
            {
                avoidQuotes: true,
            },
        ],
        "node/no-unsupported-features/es-syntax": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["off"],
        "@typescript-eslint/ban-types": [
            "warn",
            {
                types: {
                    "{}": false,
                    Function: false,
                    Boolean: false,
                },
            },
        ],
        "no-shadow": ["off"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-unused-vars": "off",
        "no-implicit-coercion": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-confusing-arrow": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                ignoreRestSiblings: true,
            },
        ],
        "node/no-unpublished-import": "off",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": ["error"],
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-explicit-any": [
            "off",
            {
                ignoreRestArgs: true,
            },
        ],
        "regexp/no-obscure-range": "off",
        "no-redeclare": "off",
        "import/no-duplicates": "warn",
        "@typescript-eslint/no-redeclare": [
            "off",
            {
                ignoreDeclarationMerge: true,
            },
        ],
        "react/jsx-key": ["error"],
        "unused-imports/no-unused-imports": ["warn"],
        "react/jsx-curly-brace-presence": [
            "warn",
            {
                props: "never",
                children: "never",
                propElementValues: "always",
            },
        ],
        "no-else-return": "off",
        // Typescript
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                disallowTypeAnnotations: false,
            },
        ],
        "@typescript-eslint/consistent-type-exports": [
            "warn",
            {
                fixMixedExportsWithInlineTypeSpecifier: true,
            },
        ],
        "no-constant-condition": "off",
        "no-useless-return": "off",
        "no-undef": "off",
        "require-yield": "error",
        "no-sequences": [
            "error",
            {
                allowInParentheses: true,
            },
        ],
    },
};
