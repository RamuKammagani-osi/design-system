import React, { isValidElement } from 'react'
import { renderElementOrComponent } from './renderElementOrComponent'

describe('renderElementOrComponent', () => {
  it('returns null when falsey value is encountered', () => {
    expect(renderElementOrComponent(false)).toBe(null)
  })

  it('returns the element when an element is passed', () => {
    const myElem = <div />
    expect(isValidElement(myElem)).toBe(true)
    expect(renderElementOrComponent(myElem)).toBe(myElem)
  })

  it('returns an element when a component is passed', () => {
    const MyComp = () => <div />
    expect(isValidElement(renderElementOrComponent(MyComp))).toBe(true)
  })

  it('clones an element when props are passed', () => {
    const props = { a: 1, b: 2, c: 3 }
    const myElem = <div />
    const outElem = renderElementOrComponent(myElem, props)
    expect(outElem.props).toEqual(props)
    expect(isValidElement(outElem)).toBe(true)
  })
})
