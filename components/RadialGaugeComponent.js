import React from 'react';
import ReactDOM from 'react-dom';

export default class RadialGauge extends React.Component {
  render() {
    let cssClass = 'radial-gauge progress-radial progress-' + this.props.overall;
    return (
      <div className={cssClass}>
        <div className="overlay">{this.props.overall}
          <div className="second-line">Overall</div>
        </div>
      </div>
    )
  }
}
