import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './ColorsComponent.js';


export default class CardStatistics extends React.Component {
  _findPlayer() {
    for (let i=0; i < this.props.players.length; i++) {
      if (this.props.players[i]['uuid'] == this.props.uid) {
        return this.props.players[i];
      }
    }
  }
  render() {
    let player = this._findPlayer();
    return (
      <section className="card card-statistics">
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].stre} /></div>
          <div className="label">Strength</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].spd} /></div>
          <div className="label">Speed</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].jmp} /></div>
          <div className="label">Jump</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].endu} /></div>
          <div className="label">Indurance</div>
        </div>

        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].ins} /></div>
          <div className="label">Inside</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].dnk} /></div>
          <div className="label">Dunk</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].ft} /></div>
          <div className="label">Freethrow</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].tp} /></div>
          <div className="label">3 pt</div>
        </div>

        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].blk} /></div>
          <div className="label">Block</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].stl} /></div>
          <div className="label">Steal</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].drb} /></div>
          <div className="label">Dribble</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].pss}/></div>
          <div className="label">Pass</div>
        </div>
        <div className="rating-group">
          <div className="rating">&nbsp;</div>
          <div className="label"></div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].reb} /></div>
          <div className="label">Rebound</div>
        </div>
        <div className="rating-group">
          <div className="rating"><Colors number={player.ratings[0].pot} /></div>
          <div className="label">Potential</div>
        </div>
      </section>
    )
  }
}
