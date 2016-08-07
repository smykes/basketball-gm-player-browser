import React from 'react';
import ReactDOM from 'react-dom';

export default class AutoCompleteChoice extends React.Component {
  render() {
    return (
      <li className="auto-complete-choice"
        data-uid={this.props.lookup}
        onClick={this.props.select}>
        <div onClick={this.props.select}
          data-uid={this.props.lookup}
          className="label__position">{this.props.position}</div>
          <div onClick={this.props.select}
            data-uid={this.props.lookup}
            className="label__name">{this.props.choice}
          </div>
        </li>
    )
  }
}
