module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "next",
        "next/core-web-vitals",
    ],
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "react/function-component-definition": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],
        "no-plusplus": "off",
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": ["error", "absolute-first"],
        "import/newline-after-import": "error",
    },
    globals: {
        window: true,
        document: true,
        localStorage: true,
        FormData: true,
        FileReader: true,
        Blob: true,
        navigator: true,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
