module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'xo', 'prettier', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react']
    },
    {
      files: ['*.stories.@(ts|tsx|js)'],
      extends: ['plugin:storybook/recommended']
    }
  ],
  ignorePatterns: ['vite.config.ts', 'vitest.setup.ts'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'jest-dom', 'testing-library'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};