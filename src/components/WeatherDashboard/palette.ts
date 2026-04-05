export interface DashboardPalette {
  base: string
  mid: string
  deep: string
  glow: string
  highlight: string
  accent: string
  accentSoft: string
  panel: string
  panelStrong: string
  border: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  textEmphasis: string
  textOnAccent: string
  textError: string
  inputBackground: string
  inputText: string
  inputPlaceholder: string
  trackBackground: string
}

export type VisualTone = 'clear' | 'cloudy' | 'rain' | 'storm' | 'fog' | 'snow'
export type DashboardStoryMode = 'auto' | 'dark' | 'clear-day' | 'dark-day'

const darkTextTokens = {
  textPrimary: '#f6f8fc',
  textSecondary: 'rgba(246, 248, 252, 0.74)',
  textMuted: 'rgba(246, 248, 252, 0.58)',
  textEmphasis: 'rgba(246, 248, 252, 0.86)',
  textOnAccent: '#06111f',
  textError: '#ffd1c0',
  inputBackground: 'rgba(8, 13, 26, 0.28)',
  inputText: '#f6f8fc',
  inputPlaceholder: 'rgba(246, 248, 252, 0.48)',
  trackBackground: 'rgba(255, 255, 255, 0.08)'
}

const lightTextTokens = {
  textPrimary: '#162131',
  textSecondary: 'rgba(22, 33, 49, 0.76)',
  textMuted: 'rgba(22, 33, 49, 0.56)',
  textEmphasis: 'rgba(22, 33, 49, 0.88)',
  textOnAccent: '#0f1826',
  textError: '#b53c25',
  inputBackground: 'rgba(255, 255, 255, 0.86)',
  inputText: '#162131',
  inputPlaceholder: 'rgba(22, 33, 49, 0.42)',
  trackBackground: 'rgba(22, 33, 49, 0.12)'
}

function createPalette(
  palette: Omit<
    DashboardPalette,
    | 'textPrimary'
    | 'textSecondary'
    | 'textMuted'
    | 'textEmphasis'
    | 'textOnAccent'
    | 'textError'
    | 'inputBackground'
    | 'inputText'
    | 'inputPlaceholder'
    | 'trackBackground'
  >,
  tone: typeof darkTextTokens | typeof lightTextTokens
): DashboardPalette {
  return {
    ...palette,
    ...tone
  }
}

export const palettes: Record<VisualTone, DashboardPalette> = {
  clear: createPalette(
    {
      base: '#08101e',
      mid: '#143a62',
      deep: '#6a341f',
      glow: 'rgba(244, 138, 77, 0.36)',
      highlight: 'rgba(104, 175, 255, 0.24)',
      accent: '#ffc98c',
      accentSoft: 'rgba(255, 201, 140, 0.18)',
      panel: 'rgba(9, 18, 37, 0.58)',
      panelStrong: 'rgba(12, 24, 45, 0.78)',
      border: 'rgba(255, 255, 255, 0.12)'
    },
    darkTextTokens
  ),
  cloudy: createPalette(
    {
      base: '#080e18',
      mid: '#24354d',
      deep: '#42516f',
      glow: 'rgba(108, 134, 169, 0.28)',
      highlight: 'rgba(176, 211, 255, 0.18)',
      accent: '#dce9ff',
      accentSoft: 'rgba(220, 233, 255, 0.16)',
      panel: 'rgba(10, 18, 34, 0.62)',
      panelStrong: 'rgba(13, 22, 40, 0.82)',
      border: 'rgba(255, 255, 255, 0.1)'
    },
    darkTextTokens
  ),
  rain: createPalette(
    {
      base: '#040c15',
      mid: '#123149',
      deep: '#1f6171',
      glow: 'rgba(67, 184, 204, 0.3)',
      highlight: 'rgba(118, 185, 255, 0.2)',
      accent: '#8de2f0',
      accentSoft: 'rgba(141, 226, 240, 0.16)',
      panel: 'rgba(6, 16, 31, 0.62)',
      panelStrong: 'rgba(8, 19, 36, 0.84)',
      border: 'rgba(141, 226, 240, 0.14)'
    },
    darkTextTokens
  ),
  storm: createPalette(
    {
      base: '#04070f',
      mid: '#19263c',
      deep: '#3d3a72',
      glow: 'rgba(97, 136, 255, 0.34)',
      highlight: 'rgba(145, 226, 255, 0.16)',
      accent: '#9fe9ff',
      accentSoft: 'rgba(159, 233, 255, 0.16)',
      panel: 'rgba(7, 13, 28, 0.64)',
      panelStrong: 'rgba(10, 17, 32, 0.86)',
      border: 'rgba(159, 233, 255, 0.16)'
    },
    darkTextTokens
  ),
  fog: createPalette(
    {
      base: '#0c1217',
      mid: '#465762',
      deep: '#7a8894',
      glow: 'rgba(233, 244, 255, 0.18)',
      highlight: 'rgba(178, 204, 221, 0.14)',
      accent: '#edf7ff',
      accentSoft: 'rgba(237, 247, 255, 0.14)',
      panel: 'rgba(16, 23, 31, 0.56)',
      panelStrong: 'rgba(18, 25, 34, 0.8)',
      border: 'rgba(255, 255, 255, 0.12)'
    },
    darkTextTokens
  ),
  snow: createPalette(
    {
      base: '#050c16',
      mid: '#244868',
      deep: '#6f90a7',
      glow: 'rgba(205, 236, 255, 0.26)',
      highlight: 'rgba(255, 255, 255, 0.16)',
      accent: '#f0fbff',
      accentSoft: 'rgba(240, 251, 255, 0.14)',
      panel: 'rgba(10, 19, 35, 0.58)',
      panelStrong: 'rgba(14, 24, 42, 0.82)',
      border: 'rgba(240, 251, 255, 0.14)'
    },
    darkTextTokens
  )
}

export const storyModePalettes: Record<
  Exclude<DashboardStoryMode, 'auto'>,
  DashboardPalette
> = {
  dark: createPalette(
    {
      base: '#030814',
      mid: '#0c1c35',
      deep: '#10192a',
      glow: 'rgba(82, 121, 204, 0.22)',
      highlight: 'rgba(233, 245, 255, 0.12)',
      accent: '#cddfff',
      accentSoft: 'rgba(205, 223, 255, 0.16)',
      panel: 'rgba(6, 14, 28, 0.74)',
      panelStrong: 'rgba(9, 18, 35, 0.9)',
      border: 'rgba(222, 236, 255, 0.14)'
    },
    darkTextTokens
  ),
  'clear-day': createPalette(
    {
      base: '#eef6ff',
      mid: '#d6e8ff',
      deep: '#f7efe8',
      glow: 'rgba(255, 193, 112, 0.4)',
      highlight: 'rgba(117, 184, 255, 0.26)',
      accent: '#4d83d4',
      accentSoft: 'rgba(77, 131, 212, 0.14)',
      panel: 'rgba(255, 255, 255, 0.74)',
      panelStrong: 'rgba(255, 255, 255, 0.92)',
      border: 'rgba(26, 53, 89, 0.12)'
    },
    lightTextTokens
  ),
  'dark-day': createPalette(
    {
      base: '#0d1522',
      mid: '#29425d',
      deep: '#5e5665',
      glow: 'rgba(171, 198, 235, 0.18)',
      highlight: 'rgba(232, 242, 255, 0.1)',
      accent: '#e2eeff',
      accentSoft: 'rgba(226, 238, 255, 0.14)',
      panel: 'rgba(17, 26, 40, 0.6)',
      panelStrong: 'rgba(20, 31, 48, 0.82)',
      border: 'rgba(225, 237, 255, 0.15)'
    },
    darkTextTokens
  )
}
