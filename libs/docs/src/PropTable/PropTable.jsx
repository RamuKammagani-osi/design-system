import React from 'react'
import cn from 'classnames'
import {
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Badge,
  UncontrolledCollapsibleCard as Card,
} from '@cwds/components'
import AnchorLink from '../AnchorLink'
import Styles from './PropTable.module.scss'

const PropDoc = ({ propDef, tag: Tag = 'h4' }) => {
  const { description, defaultValue, name, required, type } = propDef
  return (
    <div className={cn(Styles.PropDoc, 'py-3')}>
      <AnchorLink tag={Tag} className="text-monospace" parentClassName="mb-0">
        {name}
      </AnchorLink>

      <Table className="mb-0 mt-2" size="sm" bordered responsive>
        <tbody>
          <tr>
            <td style={{ width: '20%' }}>Type</td>
            <td>
              <span className="text-monospace">{renderType(type)}</span>
              {required && <Badge color="warning">required</Badge>}
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{description || <span>None given</span>}</td>
          </tr>
          {defaultValue && (
            <tr>
              <td>Default</td>
              <td>
                <pre className="mb-0" style={{ verticalAlign: 'middle' }}>
                  <code>{defaultValue.value}</code>
                </pre>
              </td>
            </tr>
          )}
          {type.name === 'enum'
            ? Array.isArray(type.value) && (
                <tr>
                  <td>oneOf</td>
                  <td>
                    <pre className="mb-0 align-middle">
                      <code>
                        {type.value.map(({ value }) => value).join(' | ')}
                      </code>
                    </pre>
                  </td>
                </tr>
              )
            : null}
        </tbody>
      </Table>
    </div>
  )
}

const PropDocs = ({ docgen, headingLevel }) => (
  <div className={Styles.PropDocs}>
    {getPropsIterable(docgen.props).map(propDef => {
      return <PropDoc key={propDef.name} propDef={propDef} />
    })}
  </div>
)

const PropTable = ({ docgen }) => {
  return (
    <Card initialClosed>
      <CardHeader>
        <CardTitle>
          <code>{docgen.displayName}</code> Props
        </CardTitle>
      </CardHeader>
      <CardBody className="py-0">
        <PropDocs docgen={docgen} />
      </CardBody>
    </Card>
  )
}

export default PropTable

//
// Helpers
//

function getPropsIterable(propsMap) {
  return Object.keys(propsMap).map(key => {
    return {
      ...propsMap[key],
      name: key,
    }
  })
}

function renderType({ name, value }) {
  if (name === 'union') {
    return value.map(d => d.name).join(' | ')
  }
  return name
}
