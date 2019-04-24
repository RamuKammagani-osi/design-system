declare module '@cwds/reactstrap' {
  export {
    Input,
    Button,
    FormGroup,
    Label,
    FormFeedback,
    FormText,
  } from 'reactstrap'
}

declare module '@cwds/icons' {
  export const Icon: any
}

declare module '@cwds/core' {
  const DS: {
    grays: {
      '100': string
      '200': string
      '300': string
      '400': string
      '500': string
      '600': string
      '700': string
      '800': string
      '900': string
    }
    colors: {
      blue: string
      indigo: string
      purple: string
      pink: string
      red: string
      orange: string
      yellow: string
      green: string
      teal: string
      cyan: string
      white: string
      gray: string
      grayDark: string
    }
    themeColors: {
      primary: string
      secondary: string
      success: string
      info: string
      warning: string
      danger: string
      light: string
      dark: string
      accent: string
      breath: string
      tertiary: string
    }
    spacers: {
      [K: string]: string
    }
    gridBreakpoints: {
      [K: string]: string
    }
    options: {
      [K: string]: string
    }
  }
  export default DS
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
