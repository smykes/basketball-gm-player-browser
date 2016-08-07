import React from 'react';
import ReactDOM from 'react-dom';
import RadialGauge from './RadialGaugeComponent.js';

export default class CardPhysical extends React.Component {
  _getOverall(player) {
    let tmp = Math.round((4 * player.ratings[0].hgt + player.ratings[0].stre + 4 * player.ratings[0].spd + 2 * player.ratings[0].jmp + 3 * player.ratings[0].endu + 3 * player.ratings[0].ins + 4 * player.ratings[0].dnk + player.ratings[0].ft + player.ratings[0].fg + 2 * player.ratings[0].tp + player.ratings[0].blk + player.ratings[0].stl + player.ratings[0].drb + 3 * player.ratings[0].pss + player.ratings[0].reb) / 32);
        tmp = (tmp > 100) ? 100 : tmp;
        tmp = (tmp < 0) ? 0 : tmp;
    return tmp;
  }
  _findPlayer() {
    return this.props.players.find((player) => {
      if (player.uuid === this.props.uid) {
        return player;
      }
    });
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
