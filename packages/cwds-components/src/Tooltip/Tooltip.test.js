import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './';

describe('Tooltip', () => {
  it('renders', () => {
    const wrapper = shallow(<Tooltip />);
    expect(!!wrapper).toBe(true);
  });
});
