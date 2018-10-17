import React from 'react';
import { isMobile } from 'react-device-detect';
import Select from 'react-select';

const OPTIONS = [
  { value: 'foo', label: 'Foo' },
  { value: 'bar', label: 'Bar' },
  { value: 'quo', label: 'Quo' },
  { value: 'qux', label: 'Qux' },
];

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {isMobile ? (
          <select
            id="my-select"
            name="my-select"
            onChange={this.handleChange}
            value={this.state.value}
          >
            <option value="" disabled>
              Select...
            </option>
            {OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <Select
            id="my-select"
            name="my-select"
            options={OPTIONS}
            onChange={option => this.setState({ value: option.value })}
            value={this.state.value}
          />
        )}
      </div>
    );
  }
}
