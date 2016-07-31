/* jshint esversion: 6*/
/* globals MY_GLOBAL */

import React from 'react';
import ReactDOM from 'react-dom';
import stats from '../players.json';// import Chooser from 'Chooser';
import Search from './SearchComponent.js';
import CardPhysical from './CardPhysicalComponent.js';
import CardCollegiate from './CardCollegiateComponent.js';
import CardStatistics from './CardStatisticsComponent.js';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uid : 0,
      suggestions : [],
      modal: 'false'
    };
    this.select = this.select.bind(this);
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
    this.help = this.help.bind(this);
    this._findSuggestions = this._findSuggestions.bind(this);
  }
  search() {
    let t = this._findSuggestions();
    this.setState({suggestions: t});
  }
  select(event) {
    var uid = event.target.getAttribute('data-uid');
    var player = this._findPlayerByUID(uid);
    this.setState({uid: parseInt(uid, 10), suggestions: []}, function() {
      document.getElementById('playerSearchInput').value = player.name;
    });
  }
  _findSuggestions() {
    var ret = [];
    let input = ReactDOM.findDOMNode(this.refs.playerSearch.refs.playerSearchInput).value;
    if (input === undefined || input.length === 0) {
      return [];
    }
    input = input.toLowerCase();
    if (input.substring(0, 1) !== ':') {
      for (let i = 0; i < stats.players.length-1; i++) {
        let wName = stats.players[i].name.substring(0, input.length);
        wName = wName.toLowerCase();
        if (input === wName) {
          ret.push(stats.players[i]);
        }
      }
    }
    else {
      var type = {};
      switch (input.substring(0,4)) {
        case ':reb':
          type.skill = 'reb'
          break;
        case ':pas':
          type.skill = 'pss'
          break;
        case ':3pt':
          type.skill = 'tp'
          break;
        case ':stl':
          type.skill = 'stl'
          break;
        default:
          type.skill = 'err'
          break;
      }
      type.number = parseInt(input.substring(7,9),10);
      type.equality = input.substring(5,6);
      for (let i = 0; i < stats.players.length-1; i++) {
        let tmp = parseInt(stats.players[i].ratings[0][type.skill], 10);
        if (type.equality === ">") {
          if (tmp > type.number) {
            ret.push(stats.players[i]);
          }
        }
        else if (type.equality === "<") {
          if (tmp < type.number) {
            ret.push(stats.players[i]);
          }
        }
        else if (type.equality === "=") {
          if (tmp === type.number) {
            ret.push(stats.players[i]);
          }
        }
      }
    }
  return ret;
}
  _findPlayerByUID(uid) {
    for (let i = 0; i < stats.players.length-1; i++) {
      if (stats.players[i].uid === parseInt(uid, 10)) {
        return stats.players[i];
      }
    }
  }
  help(event) {
    this.setState({modal: 'true'});
  }
  update(event) {
    this.setState({uid: ReactDOM.findDOMNode(this.refs.playerSearch).value}, function() {
      console.log(this.state.uid)
    });
  }
  render() {
    return (
      <section>
        <header>ReactJS Player Browser</header>
        <main>
          <Search
            ref="playerSearch"
            select={this.select}
            help = {this.help}
            suggestions={this.state.suggestions}
            update={this.search}
            uid={this.state.uid}
            players={stats.players}/>

          <CardPhysical uid = {this.state.uid} players={stats.players} />
          <CardStatistics uid = {this.state.uid} players={stats.players} />

        </main>
      </section>
    );
  }
}
