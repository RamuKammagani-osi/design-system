import React from 'react'
import { shallow } from 'enzyme'
import PageActions from './PageActions'

describe('PageActions', () => {
  it('renders children', () => {
    const MyTree = _ => <div>hi</div>
    const wrapper = shallow(
      <PageActions>
        <MyTree />
      </PageActions>
    )
    expect(wrapper.find(MyTree).length).toBe(1)
  })
})
