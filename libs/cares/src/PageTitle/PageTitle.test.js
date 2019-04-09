import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from './PageTitle'

describe('PageTitle', () => {
  it('renders children', () => {
    const MyTree = _ => <div>hi</div>
    const wrapper = shallow(
      <PageTitle>
        <MyTree />
      </PageTitle>
    )
    expect(wrapper.find(MyTree).length).toBe(1)
  })
})
