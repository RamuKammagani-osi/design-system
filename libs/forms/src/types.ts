//
// Utils
//

/**
 * Subtract keys from one interface from the other.
 *
 * @example
 * interface One { one: string }
 * interface Three { one: string, two: string }
 *
 * type Two = Omit<Three, keyof One>;
 *
 * // The type of Two will be
 * interface Two { two: string }
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * Remove from T the keys that are in common with K
 */
export type Optionalize<T extends K, K> = Omit<T, keyof K>

//
// Important Stuff
//

/**
 * Used in Collection types like `Select`, `CheckboxBank`, `RadioGroup`
 */
export interface IOption<T = string> {
  /** Visual label */
  label: string
  /** Value associated with the option */
  value: T
  /** Whether or not to enable the option */
  disabled?: boolean
  /** Primary key (e.g.; for reconciliation) */
  id?: string
}

/**
 * Collection types
 */
export interface ICollectionType<T> {
  /** Possible choices */
  options: IOption<T>[]
}

//
//
//

/**
 * The generic FormControl interface for all CWDS "form widgets"
 * @todo Isn't `[in]valid` redundant with `error`?
 */
export interface IFormControl<ValueType = {}, ControlElement = Element> {
  /** HTML id (required for label + control association) */
  id: string
  /** Traditional HTML form element `name` attribute */
  name?: string
  /** Traditional HTML form element `required` attribute */
  required?: boolean
  /** Value of the FormControl. Generic, perhaps more complex than simple string or number */
  value: ValueType
  /** Disable the _entire_ control */
  disabled?: boolean
  /** Whether or not the FormControl has been interacted with or not */
  touched?: boolean
  /** Error attributed to the control */
  error?: string
  /** Overloaded onChange handler for CWDS controls */
  onChange: (
    event: React.ChangeEvent | null,
    newValue: ValueType | undefined | null,
    ...rest: any[]
  ) => void
  /** Blur event handler for CWDS FormControls */
  onBlur: React.FocusEventHandler
}

export interface IFormField {}
