import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  oxc: {
    jsx: {
      runtime: 'automatic'
    }
  },
  test: {
    globals: true,
    environment: 'node',
    setupFiles: [
      './test/happydom.js',
      './test/testing-library.js',
      './test/mocks.js'
    ],
    coverage: {
      provider: 'v8'
    }
  }
})
