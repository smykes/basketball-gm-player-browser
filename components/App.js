/* jshint esversion: 6*/
/* globals MY_GLOBAL */

import React from 'react';
import ReactDOM from 'react-dom';
import stats from '../players.json';// import Chooser from 'Chooser';
import Search from './SearchComponent.js';
import CardPhysical from './CardPhysicalComponent.js';
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
      roster: [],
      means: []
    };
    this.select = this.select.bind(this);
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
    this.help = this.help.bind(this);
    this.file = this.file.bind(this);
    this._findSuggestions = this._findSuggestions.bind(this);
  }
  search() {
    this.setState({suggestions: this._findSuggestions()});
  }
  select(event) {
    var uid = event.target.getAttribute('data-uid');
    var player = this._findPlayerByUID(uid);
    this.setState({uid: uid, suggestions: []}, () => {
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
        let tmp;
        if (this.state.roster[i].name === undefined) {
          if (this.state.roster[i].firstName === undefined) {
            tmp = 'Jon Doe';
            this.state.roster[i].name = 'Jon Doe';
          }
          else {
            this.state.roster[i].name = this.state.roster[i].firstName + " " + this.state.roster[i].lastName;
          }
        }
        else {
          tmp = this.state.roster[i].name;
        }
        try {
          let wName = tmp.substring(0, input.length);
          wName = wName.toLowerCase();
          if (input === wName) {
            ret.push(this.state.roster[i]);
          }
        }
        catch(e) {
          continue;
        }
      }
    }
    else {
      var type = {};
      switch (input.substring(0,4)) {
        case ':tal':
          type.skill = 'hgt'
          break;
        case ':str':
          type.skill = 'stre'
          break;
        case ':spd':
          type.skill = 'spd'
          break;
        case ':jmp':
          type.skill = 'jmp'
          break;
        case ':end':
          type.skill = 'endu'
          break;
        case ':ins':
          type.skill = 'ins'
          break;
        case ':dnk':
          type.skill = 'dnk'
          break;
        case ':fth':
          type.skill = 'ft'
          break;
        case ':fgo':
          type.skill = 'fg'
          break;
        case ':3pt':
          type.skill = 'tp'
          break;
        case ':blk':
          type.skill = 'blk'
          break;
        case ':stl':
          type.skill = 'stl'
          break;
        case ':drb':
          type.skill = 'drb'
          break;
        case ':pas':
          type.skill = 'pss'
          break;
        case ':reb':
          type.skill = 'reb'
          break;
        case ':pot':
          type.skill = 'pot'
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
    return this.state.roster.find((player) => {
      if (player.uuid === uid) {
        return player;
      }
    });
  }
  help(event) {
    this.setState({modal: 'true'});
  }
  update(event) {
    this.setState({uid: ReactDOM.findDOMNode(this.refs.playerSearch).value}, () => {
      console.log("Current Player UID: " + this.state.uid);
    });
  }
  file(files) {
    var file = document.getElementById('test').files[0],
        that = this,
        jsonReader = new window.FileReader(),
        tmpThreePoint = 0,
        tmpHeight = 0,
        tmpStrength = 0,
        tmpSpeed = 0,
        tmpJump = 0,
        tmpEndurance = 0,
        tmpIns = 0,
        tmpDunk = 0,
        tmpFreeThrow = 0,
        tmpFieldGoal = 0,
        tmpThreePoint = 0,
        tmpBlock = 0,
        tmpSteal = 0,
        tmpDribble = 0,
        tmpPass = 0,
        tmpRebound = 0,
        tmpPotential = 0;
    jsonReader.onload = (e) => {
      let tmp = JSON.parse(jsonReader.result);
      tmp.players.forEach((player) => {
        player.uuid = UUID.v1();
        tmpThreePoint += player.ratings[0].tp;
        tmpHeight += player.ratings[0].stre;
        tmpSpeed += player.ratings[0].spd;
        tmpJump += player.ratings[0].jmp;
        tmpEndurance += player.ratings[0].endu;
        tmpIns += player.ratings[0].ins;
        tmpDunk += player.ratings[0].dnk;
        tmpFreeThrow += player.ratings[0].ft;
        tmpFieldGoal += player.ratings[0].fg;
        tmpBlock += player.ratings[0].blk;
        tmpSteal += player.ratings[0].stl;
        tmpDribble += player.ratings[0].drb;
        tmpPass+= player.ratings[0].pss;
        tmpRebound += player.ratings[0].reb;
        tmpPotential += player.ratings[0].pot;
        tmpStrength += player.ratings[0].pot;
      });
      that.setState({
          roster: tmp.players,
          uid: tmp.players[0].uuid,
          means: [
            {
              "threePoint" : Math.round(tmpThreePoint/tmp.players.length),
              "height" : Math.round(tmpHeight/tmp.players.length),
              "speed" : Math.round(tmpSpeed/tmp.players.length),
              "strength" : Math.round(tmpStrength/tmp.players.length),
              "jump" : Math.round(tmpJump/tmp.players.length),
              "endurance" : Math.round(tmpEndurance/tmp.players.length),
              "ins" : Math.round(tmpIns/tmp.players.length),
              "dunk" : Math.round(tmpDunk/tmp.players.length),
              "freeThrow" : Math.round(tmpFreeThrow/tmp.players.length),
              "fieldGoal" : Math.round(tmpFieldGoal/tmp.players.length),
              "block" : Math.round(tmpBlock/tmp.players.length),
              "steal" : Math.round(tmpSteal/tmp.players.length),
              "dribble" : Math.round(tmpDribble/tmp.players.length),
              "pass" : Math.round(tmpPass/tmp.players.length),
              "rebound" : Math.round(tmpRebound/tmp.players.length),
              "potential" : Math.round(tmpPotential/tmp.players.length)
            }
          ] }, () => { console.log("Current Player ID: " + that.state.uid)
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
            <CardStatistics means={this.state.means} uid={this.state.uid} players={this.state.roster} /> </section>: <section><FileReader action = {this.file} /></section>}

        </main>
      </section>
    );
  }
}
