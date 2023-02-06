// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    grid: Grid
    border: Border
    font: Font
    filter: Filter
    colors: Colors
    spacings: Spacings
    layers: Layers
    transition: Transition
  }
}

export interface Grid {
  container: string
  gutter: string
}

export interface Border {
  radius: string
}

export interface Sizes {
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
  huge: string
}

export interface Font {
  family: string
  light: number
  normal: number
  bold: number
  sizes: Sizes
}

export interface Filter {
  saturate: string
  brightness: string
}

export interface Colors {
  primary: string
  secondary: string
  mainBg: string
  lightBg: string
  white: string
  black: string
  lightGray: string
  gray: string
  darkGray: string
  red: string
}

export interface Spacings {
  xxsmall: string
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  xxlarge: string
}

export interface Layers {
  base: number
  menu: number
  overlay: number
  modal: number
  alwaysOnTop: number
}

export interface Transition {
  default: string
  fast: string
}
