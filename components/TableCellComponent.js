import React from 'react';
import ReactDOM from 'react-dom';
export default class TableRow extends React.Component {
  render() {
    return (
      <td data-th={this.props.category}>{this.props.value}</td>
    )
  }
}
