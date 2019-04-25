/**
 * TODO
 */
export interface IOption<T> {
  /** Visual label */
  label: string
  /** Value associated with the option */
  value: T
  /** Whether or not to enable the option */
  disabled: boolean
  /** TODO (PK for reconciliation) */
  id: string
}

/**
 * TODO
 */
export interface IListType<T = string | number> {
  /** Possible choices */
  options: IOption<T>[]
}

/**
 * TODO
 */
export interface IFormControl<T = {}> {
  /** TODO */
  name: string
  /** TODO */
  value: T
  /** TODO */
  disabled?: boolean
  /** TODO */
  touched: boolean
  /** TODO */
  error: string | boolean
  /** TODO */
  innerRef?: React.Ref<any>
  /** TODO */
  invalid?: boolean
  /** TODO */
  valid?: boolean
  /** TODO */
  onChange: React.ChangeEventHandler
  /** TODO */
  onBlur: React.FocusEventHandler
}
