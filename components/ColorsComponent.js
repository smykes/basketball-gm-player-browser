import React from 'react';
import ReactDOM from 'react-dom';
export default class Colors extends React.Component {
  _getColor() {
    if (this.props.number < 25) {
      return 'colors black'
    }
    else if (this.props.number >= 25 && this.props.number < 50) {
      return 'colors bronze'
    }
    else if (this.props.number >= 50 && this.props.number < 75) {
      return 'colors silver'
    }
    else if (this.props.number >= 75) {
      return 'colors gold'
    }
  }
  render() {
  var color = this._getColor();
  return (
    <div className={color}>{this.props.number}</div>
  )

  }
}
