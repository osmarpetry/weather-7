const React = require('react')
const { mock } = require('bun:test')

mock.module('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const { unoptimized, priority, ...rest } = props

    return React.createElement('img', rest)
  }
}))
