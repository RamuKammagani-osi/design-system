import DS from './core'

const breakpoints = Object.keys(DS.breakpoints)
  .map(key => ({ key, value: DS.breakpoints[key] }))
  .reduce((acc, kv) => {
    return {
      ...acc,
      [kv.key]: `${kv.value}px`,
    }
  }, {})

export default {
  ...DS.grays,
  ...DS.themeColors,
  spacer: DS.spacer,
  ...DS.spacers,
  white: DS.colors.white,
  black: DS.colors.black,
  // ...DS.breakpoints,
  ...breakpoints,
  ...DS.options,
}