import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { DashboardStoryModeProvider } from 'components/WeatherDashboard/storybook-mode'

export const globalTypes = {
  weatherCanvasMode: {
    name: 'Clima',
    description: 'Modo visual para o dashboard no Storybook',
    defaultValue: 'auto',
    toolbar: {
      icon: 'mirror',
      dynamicTitle: true,
      items: [
        { value: 'auto', title: 'Auto' },
        { value: 'dark', title: 'Escuro' },
        { value: 'clear-day', title: 'Dia claro' },
        { value: 'dark-day', title: 'Dia escuro' }
      ]
    }
  }
}

export const decorators = [
  (StoryFn, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardStoryModeProvider mode={context.globals.weatherCanvasMode}>
        <StoryFn />
      </DashboardStoryModeProvider>
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
export const tags = ['autodocs'];
