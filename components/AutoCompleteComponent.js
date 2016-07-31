import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteChoice from './AutoCompleteChoiceComponent';
export default class AutoComplete extends React.Component {
  _getChoices() {
    let ret = [];
    for (var i = 0; i < this.props.suggestions.length; i++) {
      ret.push(<AutoCompleteChoice
                  key={this.props.suggestions[i].uid}
                  choice ={this.props.suggestions[i].name}
                  position={this.props.suggestions[i].pos}
                  select={this.props.select}
                  lookup={this.props.suggestions[i].uid}
                   />)
    }
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
