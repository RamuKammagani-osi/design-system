import React from 'react'
import { mount } from 'enzyme'
import Field from './Field'

describe.skip('Field', () => {
  it('exists', () => {
    expect(() => mount(<Field />)).not.toThrow()
  })

  // xit('accepts a custom component type', () => {
  //   const MyComponent = () => <div />;
  //   const onChange = jest.fn();
  //   const wrapper = mount(
  //     <Field onChange={onChange} component={MyComponent} />
  //   );
  //   const myComponent = wrapper.find(MyComponent);
  //   myComponent.type();
  //   // expect(myComponent instanceof MyComponent).toBe(true);
  //   // console.log(myComponent.debug());
  //   // expect(myComponent.prop('onChange')).toEqual(onChange);
  // });
})
