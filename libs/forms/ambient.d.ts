declare module '@cwds/reactstrap' {
  export { Input, Button, FormGroup, Label } from 'reactstrap'
}

declare module '@cwds/icons' {
  export const Icon: any
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
