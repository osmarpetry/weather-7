import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
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
