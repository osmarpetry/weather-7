const { afterEach, expect } = require('bun:test')
const { cleanup } = require('@testing-library/react')
const matchers = require('@testing-library/jest-dom/matchers')

expect.extend(matchers)

afterEach(() => {
  cleanup()
})
