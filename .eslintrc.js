module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020
    },
    rules: {
        indent: [
            'error',
            4
        ],
        semi: 0,
        quotes: 0,
        'comma-dangle': [
            'error',
            'only-multiline'
        ],
        'no-param-reassign': 'warn',
        'no-throw-literal': 'warn',
        'max-len': 'off',
        'no-plusplus': [
            'warn',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-alert': 'off',
        'func-names': 'off',
        'no-use-before-define': 'off',
        'space-before-function-paren': [
            'error',
            'always'
        ],
        'no-unused-vars': 'warn',
        'consistent-return': 'off',
        'no-promise-executor-return': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'import/extensions': 'off',
        eqeqeq: 'warn',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off'
    }
}
