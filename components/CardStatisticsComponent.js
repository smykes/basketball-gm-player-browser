import React from 'react';
import ReactDOM from 'react-dom';
import {Radar} from 'react-chartjs-2';
import TableRow from './TableRowComponent.js';
export default class CardStatistics extends React.Component {
  _findPlayer() {
    return this.props.players.find((player) => {
      if (player.uuid === this.props.uid) {
        return player;
      }
    });
  }
  _getRows(player) {
    let ret = [];
    player.stats.forEach((year, index) => {
      if (year.playoffs !== true) {
        ret.push(<TableRow key={index} index={index} player={player} />);
      }
    })
    return ret;
  }
  render() {
    let player = this._findPlayer();
    let radarSkill = {
      labels: [
        "Inside",
        "Dunk",
        "Free Throw",
        "Three Point",
        "Block",
        "Steal",
        "Dribble",
        "Pass",
        "Rebound"
      ],
      datasets: [
          {
              label: "Skills",
              backgroundColor: "rgba(10,54,101,0.2)",
              borderColor: "rgba(10,54,101,1)",
              pointBackgroundColor: "rgba(10,54,101,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(10,54,101,1)",
              data: [
                player.ratings[0].ins,
                player.ratings[0].dnk,
                player.ratings[0].ft,
                player.ratings[0].tp,
                player.ratings[0].blk,
                player.ratings[0].stl,
                player.ratings[0].drb,
                player.ratings[0].pss,
                player.ratings[0].reb
            ]
          },{
          label: "League Averages",
          backgroundColor: "rgba(0,99,172,0.2)",
          borderColor: "rgba(0,99,172,1)",
          pointBackgroundColor: "rgba(0,99,172,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0,99,172,1)",
          data: [
            this.props.means[0].ins,
            this.props.means[0].dunk,
            this.props.means[0].freeThrow,
            this.props.means[0].threePoint,
            this.props.means[0].block,
            this.props.means[0].steal,
            this.props.means[0].dribble,
            this.props.means[0].pass,
            this.props.means[0].rebound
          ]

      }
      ]
    };
    var colors = [
      "rgba(0,0,0,0.2)",
      "rgba(255,0,0,0.2)",
      "rgba(0,255,0,0.2)",
      "rgba(0,0,255,0.2)",
      "rgba(255,255,0,0.2)",
      "rgba(0,255,255,0.2)",
      "rgba(255,0,255,0.2)",
      "rgba(192,192,192,0.2)",
      "rgba(128,0,0,0.2)",
      "rgba(0,128,0,0.2)",
      "rgba(128,0,128,0.2)",
      "rgba(0,128,128,0.2)",
      "rgba(0,128,128,0.2)",
      "rgba(0,128,128,0.2)"
    ];
    var dSet = [];
    player.ratings.forEach((year, index) => {
      let tmp = {};
      tmp.label = "Measurables - " + year.season;
      tmp.backgroundColor= colors[index],
      tmp.borderColor= colors[index],
      tmp.pointBackgroundColor= colors[index],
      tmp.pointBorderColor= colors[index],
      tmp.pointHoverBackgroundColor= colors[index],
      tmp.pointHoverBorderColor= colors[index],
      tmp.data = [
        year.stre,
        year.spd,
        year.jmp,
        year.endu
      ]
      dSet.push(tmp)
    });
    let radarData = {
      labels: ["Strength", "Speed", "Jump", "Endurance"],
      datasets: dSet
    };


    let cats = ['season', 'gp', 'min', 'pts', 'trb', 'ast','stl','blk'];

    return (
      <section>
      <section className="card card-statistics">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>GP</th>
              <th>Minutes</th>
              <th>PTS</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
            </tr>
          </thead>
          <tbody>
            {this._getRows(player)}
          </tbody>
        </table>
      </section>
      <section className="card card-statistics card--padded">
        <Radar data={radarData} />
        <Radar data={radarSkill}/>
      </section>
      </section>
    )
  }
}
