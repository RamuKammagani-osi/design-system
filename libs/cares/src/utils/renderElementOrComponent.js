import { createElement, cloneElement } from 'react'
import pick from 'lodash.pick'

const identity = x => x

/**
 *
 * @param {React.ReactNode} ElemOrComp
 * @param {*} props
 * @param {*} getterFn function or array of props
 */
export const renderElementOrComponent = (
  ElemOrComp,
  props,
  getterFn = identity
) => {
  if (!ElemOrComp) return null
  const fn = Array.isArray(getterFn) ? x => pick(x, getterFn) : getterFn
  return typeof ElemOrComp === 'function'
    ? createElement(ElemOrComp, fn(props))
    : props
    ? cloneElement(ElemOrComp, props)
    : ElemOrComp
}
