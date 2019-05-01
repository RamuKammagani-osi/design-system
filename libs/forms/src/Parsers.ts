interface IParser {
  (value: string): string
}

const DATE: IParser = value => value.replace(/[^\d]/gi, '')

export { DATE }
