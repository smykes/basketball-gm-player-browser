import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteChoice from './AutoCompleteChoiceComponent';
export default class AutoComplete extends React.Component {
  _getChoices() {
    let ret = [];
    this.props.suggestions.forEach((player) => {
      ret.push(<AutoCompleteChoice
                  key={player.uuid}
                  choice ={player.name}
                  position={player.pos}
                  select={this.props.select}
                  lookup={player.uuid}
                   />)
    });
    return ret;
  }
  render() {
    return (
        <ul className="auto-complete">
          {this._getChoices()}
        </ul>
    )
  }
}
