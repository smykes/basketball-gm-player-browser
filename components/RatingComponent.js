import React from 'react';
import ReactDOM from 'react-dom';
import {HorizontalBar} from 'react-chartjs-2';


export default class RatingComponent extends React.Component {
  _getData() {
    let ret = [];
    this.props.ratings.forEach((season, index) => {
      let tmp = Math.round((4 * season.hgt + season.stre + 4 * season.spd + 2 * season.jmp + 3 * season.endu + 3 * season.ins + 4 * season.dnk + season.ft + season.fg + 2 * season.tp + season.blk + season.stl + season.drb + 3 * season.pss + season.reb) / 32);
          tmp = (tmp > 100) ? 100 : tmp;
          tmp = (tmp < 0) ? 0 : tmp;
          ret.push(tmp);
    });
    return ret;
  }
  _getLabels() {
    let ret = [];
    this.props.ratings.forEach((season, index) => {
      ret.push(season.season);
    });
    return ret;
  }
  render() {
    let datum = this._getData();
    let labels = this._getLabels();
    let data = {
      labels: labels,
        datasets: [{
            label: 'Overall Rating',
            backgroundColor: 'rgba(255,99,132,1)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: datum
        }],
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        barWidth: 20,
        options: {
          stacked: true,
          barWidth: 20
        }
    };
    return (
      <section className="rating card card--padded">
      <HorizontalBar data={data}/>
      </section>
    )
  }
}
