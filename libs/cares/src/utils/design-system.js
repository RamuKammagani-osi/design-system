const XS = 'xs'
const SM = 'sm'
const MD = 'md'
const LG = 'lg'
const XL = 'xl'

export const SIZES_ALL = {
  XS,
  SM,
  MD,
  LG,
  XL,
}

export const SIZES_SHORT = {
  SM,
  MD,
  LG,
}

const ALLOWED_SIZES = Object.keys(SIZES_ALL).map(key => SIZES_ALL[key])

export const isValidSize = (size, defaultValue) =>
  ALLOWED_SIZES.includes(size) ? size : defaultValue

export const CONTEXT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light',
  DARK: 'dark',
}
