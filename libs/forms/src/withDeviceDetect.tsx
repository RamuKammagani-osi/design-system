import React from 'react'
import { isMobile } from 'react-device-detect'

interface WithDeviceDetectProps {
  isMobile: boolean
}

const withDeviceDetect = <T extends object, U extends object>(
  DefaultComponent: React.ComponentType<T>,
  MobileComponent: React.ComponentType<U>
) => {
  const Foo: React.FunctionComponent<T & U> = props => {
    return isMobile ? (
      <DefaultComponent {...props} />
    ) : (
      <MobileComponent {...props} />
    )
  }
  return Foo
  // return class Example extends React.Component<T & WithDeviceDetectProps> {
  //   render() {
  //     return isMobile ? <div>OH NO</div> : <Component {...this.props} />
  //   }
  // }
}

export default withDeviceDetect
