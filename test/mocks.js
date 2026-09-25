import React from 'react'
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const { unoptimized, priority, ...rest } = props

    return React.createElement('img', rest)
  }
}))
