import React from 'react';
import ReactDOM from 'react-dom';
export default class CardCollegiate extends React.Component {
  _findPlayer() {
    for (let i=0; i < this.props.players.length; i++) {
      if (this.props.players[i]['uid'] == this.props.uid) {
        return this.props.players[i];
      }
    }
  }
  render() {
    let player = this._findPlayer();
    return (
      <section className="card">
      <ul>
        <li>
          <label>College:</label>
          {player.college}
        </li>
        <li>
          <label>Round/Pick:</label>
          {player.draft.year} - Round: {player.draft.round} Pick: {player.draft.pick}
        </li>

        </ul>
      </section>
    )
  }
}
