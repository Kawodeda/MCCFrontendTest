module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict',
        'react-app',
        'react-app/jest',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        tsconfigRootDir: __dirname
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true
};
