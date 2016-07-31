import React from 'react';
import ReactDOM from 'react-dom';
import RadialGauge from './RadialGaugeComponent.js';

export default class CardPhysical extends React.Component {
  _getOverall(player) {
    var score = 0;
    score += player.ratings[0].stre;
    score += player.ratings[0].spd;
    score += player.ratings[0].jmp;
    score += player.ratings[0].endu;
    score += player.ratings[0].ins;
    score += player.ratings[0].dnk;
    score += player.ratings[0].ft;
    score += player.ratings[0].fg;
    score += player.ratings[0].tp;
    score += player.ratings[0].blk;
    score += player.ratings[0].stl;
    score += player.ratings[0].drb;
    score += player.ratings[0].pss;
    score += player.ratings[0].reb;
    score += player.ratings[0].pot;
    return Math.round(score/16);
  }
  _findPlayer() {
    for (let i=0; i < this.props.players.length; i++) {
      if (this.props.players[i]['uid'] == this.props.uid) {
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
