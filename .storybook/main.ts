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
  }
}

module.exports = config
