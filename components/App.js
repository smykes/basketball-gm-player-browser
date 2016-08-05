/* jshint esversion: 6*/
/* globals MY_GLOBAL */

import React from 'react';
import ReactDOM from 'react-dom';
import stats from '../players.json';// import Chooser from 'Chooser';
import Search from './SearchComponent.js';
import CardPhysical from './CardPhysicalComponent.js';
import CardCollegiate from './CardCollegiateComponent.js';
import CardStatistics from './CardStatisticsComponent.js';
import FileReader from './FileReaderComponent.js';
import UUID from 'node-uuid';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uid : null,
      suggestions : [],
      modal: 'false',
      players: [],
      roster: []
    };
    this.select = this.select.bind(this);
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
    this.help = this.help.bind(this);
    this.file = this.file.bind(this);
    this._findSuggestions = this._findSuggestions.bind(this);
  }
  search() {
    let t = this._findSuggestions();
    this.setState({suggestions: t});
  }
  select(event) {
    var uid = event.target.getAttribute('data-uid');
    var player = this._findPlayerByUID(uid);
    this.setState({uid: uid, suggestions: []}, function() {
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
      for (let i = 0; i < this.state.roster.length-1; i++) {
        var tmp;
        if (this.state.roster[i].name === undefined) {
          tmp = 'Jon Doe';
          this.state.roster[i].name = 'Jon Doe';
        }
        else {
          tmp = this.state.roster[i].name;
        }
        let wName = tmp.substring(0, input.length);
        wName = wName.toLowerCase();
        if (input === wName) {
          ret.push(this.state.roster[i]);
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
      for (let i = 0; i < this.state.roster.length-1; i++) {
        let tmp = parseInt(this.state.roster[i].ratings[0][type.skill], 10);
        if (type.equality === ">") {
          if (tmp > type.number) {
            ret.push(this.state.roster[i]);
          }
        }
        else if (type.equality === "<") {
          if (tmp < type.number) {
            ret.push(this.state.roster[i]);
          }
        }
        else if (type.equality === "=") {
          if (tmp === type.number) {
            ret.push(this.state.roster[i]);
          }
        }
      }
    }
  return ret;
}
  _findPlayerByUID(uid) {
    for (let i = 0; i < this.state.roster.length-1; i++) {
      if (this.state.roster[i].uuid === uid) {
        return this.state.roster[i];
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
  file(files) {
    var file = document.getElementById('test').files[0];
    var that = this;
    var jsonReader = new window.FileReader();
    jsonReader.onload = function(e) {
      let tmp = JSON.parse(jsonReader.result);
      for (var i = 0; i < tmp.players.length; i++) {
        tmp.players[i].uuid = UUID.v1();
      }
      that.setState({roster: tmp.players, uid: tmp.players[0].uuid}, function() {
        console.log(that.state.uid);
      });
    }
    if (file) {
      jsonReader.readAsText(file);
    }
  }
  render() {
    return (
      <section>
        <header>ReactJS Player Browser</header>

        <main>

        {this.state.uid !== null ?
          <section>
            <Search
              ref="playerSearch"
              select={this.select}
              help = {this.help}
              suggestions={this.state.suggestions}
              update={this.search}
              uid={this.state.uid}
              players={this.state.roster}/>
            <CardPhysical uid={this.state.uid} players={this.state.roster} />
            <CardStatistics uid={this.state.uid} players={this.state.roster} /> </section>: <section><FileReader action = {this.file} /></section>}

        </main>
      </section>
    );
  }
}
