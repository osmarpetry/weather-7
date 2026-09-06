import type { Configuration } from 'webpack'

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config: Configuration) => {
    config.resolve = config.resolve || {}
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      `${process.cwd()}/src`
    ]
    return config
  },
  docs: {
    autodocs: true
  },
  // react-docgen-typescript-plugin calls removed TS compiler APIs (ts.createIdentifier etc.)
  // on TypeScript >=5. Switch docgen to the babel-based implementation instead of upgrading
  // Storybook (out of scope for this dependency bump).
  typescript: {
    reactDocgen: 'react-docgen'
  }
}

module.exports = config
