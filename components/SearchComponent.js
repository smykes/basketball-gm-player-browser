import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './AutoCompleteComponent.js'
export default class Search extends React.Component {
  _findPlayer() {
    for (let i=0; i < this.props.players.length; i++) {
      if (this.props.players[i]['uid'] === this.props.uid) {
        return this.props.players[i];
      }
    }
  }
  render() {
    let player = this._findPlayer()
    return (
      <section className="search">
        <button className="search-icon"><i className="fa fa-search"></i></button>
        <input id="playerSearchInput" ref="playerSearchInput" onChange={this.props.update} type="text" placeholder={player.name}/>
        <button className="help-icon" onClick={this.props.help}><i className="fa fa-question-circle"/></button>
        <AutoComplete
          select={this.props.select}
          suggestions={this.props.suggestions}/>
      </section>
    )
  }
}
