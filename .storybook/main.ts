import type { Configuration } from 'webpack'

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  babel: async (options) => ({
    ...options,
    babelrc: false,
    configFile: false
  }),
  webpackFinal: async (config: Configuration) => {
    config.resolve = config.resolve || {}
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      `${process.cwd()}/src`
    ]
    return config
  },
  docs: {}
}

module.exports = config
