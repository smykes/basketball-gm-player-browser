import React from 'react';
import ReactDOM from 'react-dom';
import {Radar} from 'react-chartjs-2';

export default class CardStatistics extends React.Component {
  _findPlayer() {
    return this.props.players.find((player) => {
      if (player.uuid === this.props.uid) {
        return player;
      }
    });
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

    let radarData = {
      labels: ["Strength", "Speed", "Jump", "Endurance"],
      datasets: [
          {
              label: "Measurables",
              backgroundColor: "rgba(10,54,101,0.2)",
              borderColor: "rgba(10,54,101,1)",
              pointBackgroundColor: "rgba(10,54,101,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(10,54,101,1)",
              data: [
                player.ratings[0].stre,
                player.ratings[0].spd,
                player.ratings[0].jmp,
                player.ratings[0].endu
              ]
          },
          {
            label: "League Average",
            backgroundColor: "rgba(0,99,172,0.2)",
            borderColor: "rgba(0,99,172,1)",
            pointBackgroundColor: "rgba(0,99,172,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(0,99,172,1)",
            data: [
              this.props.means[0].strength,
              this.props.means[0].speed,
              this.props.means[0].jump,
              this.props.means[0].endurance
            ]

          }
      ]
    };
    return (
      <section className="card card-statistics">
          <Radar data={radarData} />
          <Radar data={radarSkill}/>
      </section>
    )
  }
}
