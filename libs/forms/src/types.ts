/**
 * TODO
 */
export interface IOption<T> {
  /** Visual label */
  label: string
  /** Value associated with the option */
  value: T
  /** Whether or not to enable the option */
  disabled?: boolean
  /** TODO (PK for reconciliation) */
  id?: string
}

/**
 * TODO
 */
export interface IListType<T = string | number> {
  /** Possible choices */
  options: IOption<T>[]
}

export interface IFormControlEventHandlers<
  ValueType = string | string[],
  ControlElement = Element
> {
  onChange: (
    event: React.SyntheticEvent<ControlElement> | null,
    newValue: ValueType | undefined | null,
    ...rest: any[]
  ) => void
  /** Blur event handler for CWDS FormControls */
  onBlur: React.FocusEventHandler
}

export interface IFormControlMetaState {
  /** Whether or not the FormControl has been interacted with or not */
  touched?: boolean
  /** Error attributed to the control */
  error?: string
}

/**
 * The generic FormControl interface for all CWDS "form widgets"
 * @todo Isn't `[in]valid` redundant with `error`?
 */
export interface IFormControl<ValueType = {}, ControlElement = Element>
  extends IFormControlEventHandlers<ValueType, ControlElement>,
    IFormControlMetaState {
  /** HTML id (required for label + control association) */
  id: string
  /** Traditional HTML form element `name` attribute */
  name?: string
  /** Traditional HTML form element `required` attribute */
  required?: boolean
  /** Value of the FormControl. Generic, perhaps more complex than simple string or number */
  value: ValueType
  /** Traditional HTML form element `disabled` attribute */
  disabled?: boolean
}

export interface IFormField {}
