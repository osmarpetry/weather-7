import type { Configuration } from 'webpack'

const config = {
  viteFinal: async (config) => {
    config.resolve = { ...config.resolve, tsconfigPaths: true }
    config.build = {
      ...config.build,
      rolldownOptions: {
        ...config.build?.rolldownOptions,
        onLog(level, log, defaultHandler) {
          if (
            level === 'warn' &&
            log.code === 'MODULE_LEVEL_DIRECTIVE' &&
            (log.id?.includes('/node_modules/next/') ||
              log.message?.includes('/node_modules/next/'))
          ) return
          defaultHandler(level, log)
        }
      }
    }
    return config
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs-vite',
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
