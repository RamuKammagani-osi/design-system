import React, { Component } from 'react'
import cn from 'classnames'
import { IconButton as Button } from '@cwds/cares'
import { Input, Util } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import { Select } from '@cwds/forms'
import uniqueId from 'lodash.uniqueid'

// From react-table@6.8.6
// See https://github.com/react-tools/react-table/blob/f55ce620411c619855a2fe2f081407e4f82727b9/src/pagination.js
const { keyCodes } = Util

class Pagination extends Component {
  uniqueId = uniqueId('datagrid_pagination_')
  constructor(props) {
    super()

    this.getSafePage = this.getSafePage.bind(this)
    this.changePage = this.changePage.bind(this)
    this.applyPage = this.applyPage.bind(this)

    this.state = {
      page: props.page,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page })
  }

  getSafePage(page) {
    if (Number.isNaN(page)) {
      page = this.props.page
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1)
  }

  changePage(page) {
    page = this.getSafePage(page)
    this.setState({ page })
    if (this.props.page !== page) {
      this.props.onPageChange(page)
    }
  }

  applyPage(e) {
    if (e) {
      e.preventDefault()
    }
    const page = this.state.page
    this.changePage(page === '' ? this.props.page : page)
  }
  render() {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      showPageJump,
      canPrevious,
      canNext,
      onPageSizeChange,
      className,
      manual,
      loading,
    } = this.props

    if (!manual && !loading && pages === 1) {
      return null
    }

    const options = pageSizeOptions.map((option, i) => ({
      value: option,
      label: [option, this.props.rowsText].join(' '),
    }))

    const value = options.find(({ value }) => value === pageSize)

    return (
      <nav
        aria-label="pagination"
        className={cn(
          'd-flex',
          'justify-content-center',
          'align-items-center',
          'mt-3',
          'pb-1',
          className,
          '-paginaiton'
        )}
        style={this.props.style}
      >
        <Button
          className="mr-1 px-2"
          disabled={!canPrevious}
          aria-label="first page"
          onClick={() => {
            if (!canPrevious) return
            this.changePage(0)
          }}
          icon={<Icon fixedWidth name="angle-double-left" />}
        />
        <Button
          className="px-2"
          aria-label="previous page"
          onClick={() => {
            if (!canPrevious) return
            this.changePage(page - 1)
          }}
          disabled={!canPrevious}
          icon={<Icon fixedWidth name="angle-left" />}
        />
        <div className="d-none d-md-flex align-items-center ml-2">
          <span className="mr-1 px-2">{this.props.pageText}</span>
          {showPageJump ? (
            <Input
              id={`${this.uniqueId}_pageJump`}
              className="d-inline-block text-center"
              style={{
                width: '3em',
              }}
              aria-label="Page Jump"
              type={this.state.page === '' ? 'text' : 'number'}
              onChange={e => {
                const val = e.target.value
                const page = val - 1
                if (val === '') {
                  return this.setState({ page: val })
                }
                this.setState({ page: this.getSafePage(page) })
                return undefined
              }}
              value={this.state.page === '' ? '' : this.state.page + 1}
              onBlur={this.applyPage}
              onKeyPress={e => {
                if (
                  e.which === keyCodes.enter ||
                  e.keyCode === keyCodes.enter
                ) {
                  this.applyPage()
                }
              }}
            />
          ) : (
            <span className="-currentPage">{page + 1}</span>
          )}
          <span className="mx-1">{this.props.ofText}</span>
          <span className="-totalPages">{pages || 1}</span>
        </div>
        {showPageSizeOptions && (
          <div style={{ width: '10rem' }}>
            <Select
              className="mx-3"
              aria-label="Page Size"
              value={value}
              options={options}
              onChange={({ value }) => onPageSizeChange(Number(value))}
              clearable={false}
              searchable={false}
              menuPlacement="auto"
            />
          </div>
        )}
        <Button
          className="mr-1 px-2"
          aria-label="next page"
          onClick={() => {
            if (!canNext) return
            this.changePage(page + 1)
          }}
          disabled={!canNext}
          icon={<Icon fixedWidth name="angle-right" />}
        />{' '}
        <Button
          className="px-2"
          aria-label="last page"
          disabled={!canNext}
          onClick={() => {
            if (!canNext) return
            this.changePage(pages)
          }}
          icon={<Icon fixedWidth name="angle-double-right" />}
        />
      </nav>
    )
  }
}

export default Pagination
