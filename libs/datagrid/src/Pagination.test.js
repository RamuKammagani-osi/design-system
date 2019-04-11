import React from 'react'
import { shallow } from 'enzyme'
import { ReactTableDefaults } from 'react-table'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('returns null for small collections', () => {
    const wrapper = shallow(<Pagination pages={1} />)
    expect(wrapper.type()).toBe(null)
  })

  describe('navigation', () => {
    const defaults = () => ({
      pageSizeOptions: ReactTableDefaults.pageSizeOptions,
      page: 0,
      pages: 10,
    })

    it('renders previous buttons', () => {
      const wrapper = shallow(<Pagination {...defaults()} canPrevious />)
      const btnFirst = wrapper.find('[aria-label="first page"]')
      expect(btnFirst.prop('disabled')).toBe(false)
      const btnPrev = wrapper.find('[aria-label="previous page"]')
      expect(btnPrev.prop('disabled')).toBe(false)
    })

    it('renders next buttons', () => {
      const wrapper = shallow(<Pagination {...defaults()} canNext />)
      const btnNext = wrapper.find('[aria-label="next page"]')
      expect(btnNext.prop('disabled')).toBe(false)
      const btnLast = wrapper.find('[aria-label="last page"]')
      expect(btnLast.prop('disabled')).toBe(false)
    })

    it('moves forward one page', () => {
      const onPageChangeMock = jest.fn(() => {})
      const wrapper = shallow(
        <Pagination
          {...defaults()}
          page={3}
          canNext
          onPageChange={onPageChangeMock}
        />
      )
      const btnNext = wrapper.find('[aria-label="next page"]')
      expect(btnNext.prop('disabled')).toBe(false)
      btnNext.simulate('click')
      expect(onPageChangeMock).toHaveBeenCalledWith(4)
    })

    it('jumps to last page', () => {
      const onPageChangeMock = jest.fn(() => {})
      const wrapper = shallow(
        <Pagination
          {...defaults()}
          page={3}
          pages={10}
          canNext
          onPageChange={onPageChangeMock}
        />
      )
      const btnNext = wrapper.find('[aria-label="last page"]')
      expect(btnNext.prop('disabled')).toBe(false)
      btnNext.simulate('click')
      expect(onPageChangeMock).toHaveBeenCalledWith(9)
    })

    it('moves backwards one page', () => {
      const onPageChangeMock = jest.fn(() => {})
      const wrapper = shallow(
        <Pagination
          {...defaults()}
          page={3}
          canPrevious
          onPageChange={onPageChangeMock}
        />
      )
      const btnPrev = wrapper.find('[aria-label="previous page"]')
      expect(btnPrev.prop('disabled')).toBe(false)
      btnPrev.simulate('click')
      expect(onPageChangeMock).toHaveBeenCalledWith(2)
    })

    it('jumps to the first page', () => {
      const onPageChangeMock = jest.fn(() => {})
      const wrapper = shallow(
        <Pagination
          {...defaults()}
          page={3}
          canPrevious
          onPageChange={onPageChangeMock}
        />
      )
      const btnPrev = wrapper.find('[aria-label="first page"]')
      expect(btnPrev.prop('disabled')).toBe(false)
      btnPrev.simulate('click')
      expect(onPageChangeMock).toHaveBeenCalledWith(0)
    })
  })
})
