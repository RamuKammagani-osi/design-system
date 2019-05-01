export interface IParser {
  (value: string): string
}

type IMask = Array<string | RegExp>

type MaskParserTuple = [IMask, IParser]

// DATE
export const DATE_MASK = [
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]
export const DATE_PARSER: IParser = value => value.replace(/[^\d]/gi, '')

// PHONE
export const PHONE_MASK = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]
export const PHONE_PARSER: IParser = value => value.replace(/[^\d]/gi, '')
