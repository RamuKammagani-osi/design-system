import React from 'react'
import { shallow } from 'enzyme'
import SideNav from './ArticleSideNav'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from '@cwds/components'

describe('SideNav', () => {
  it('returns null if no routes passed', () => {
    const wrapper = shallow(<SideNav />)
    expect(wrapper.children().length).toBe(0)
  })

  it('renders a ListGroup with Links', () => {
    const routes = [
      { path: '/a', title: 'A' },
      { path: '/b', title: 'B', active: true },
      { path: '/c', title: 'C' },
    ]
    const wrapper = shallow(<SideNav routes={routes} />)
    expect(wrapper.type()).toBe(ListGroup)
    expect(wrapper.find(ListGroupItem).length).toBe(3)

    const activeItem = wrapper.find(ListGroupItem).at(1)
    const activeLink = activeItem.find(Link)
    const activeRoute = routes[1]

    expect(activeItem.prop('active')).toEqual(activeRoute.active)
    expect(activeItem.key()).toEqual(activeRoute.path)
    expect(activeLink.prop('to')).toEqual(activeRoute.path)
    expect(activeLink.prop('children')).toEqual(activeRoute.title)
  })
})
