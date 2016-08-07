import React from 'react';
import ReactDOM from 'react-dom';
export default class Award extends React.Component {
  render() {
    return (
      <li className="award">{this.props.year} - {this.props.honor}</li>

    )
  }
}
