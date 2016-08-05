import React from 'react';
import ReactDOM from 'react-dom';
import RadialGauge from './RadialGaugeComponent.js';

export default class CardPhysical extends React.Component {
  _getOverall(player) {
    let tmp = Math.round((4 * player.ratings[0].hgt + player.ratings[0].stre + 4 * player.ratings[0].spd + 2 * player.ratings[0].jmp + 3 * player.ratings[0].endu + 3 * player.ratings[0].ins + 4 * player.ratings[0].dnk + player.ratings[0].ft + player.ratings[0].fg + 2 * player.ratings[0].tp + player.ratings[0].blk + player.ratings[0].stl + player.ratings[0].drb + 3 * player.ratings[0].pss + player.ratings[0].reb) / 32);
    if (tmp > 100) {
        return 100;
    }
    if (tmp < 0) {
        return 0;
    }
    return tmp;
  }

  _findPlayer() {
    for (let i=0; i < this.props.players.length; i++) {
      if (this.props.players[i]['uuid'] == this.props.uid) {
        return this.props.players[i];
      }
    }
  }
  render() {
    let player = this._findPlayer();
    let score = this._getOverall(player);

    return (
      <section className="card-physical card card__title">
        <RadialGauge overall={score}/>
        <img className="head-shot" src={player.imgURL} />
        <label className="card__label--bottom">{player.name} • {player.pos} • {player.college}</label>
      </section>
    )
  }
}
