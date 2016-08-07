import React from 'react';
import ReactDOM from 'react-dom';
import Award from './AwardComponent';
export default class Awards extends React.Component {
  _getAwards() {
    var ret = [];
    this.props.honors.forEach((award, index) => {
      console.log(award);
      ret.push(<Award key={index} honor={award.type} year={award.season}/>)
    });
    console.log(ret);
    return ret;
  }
  render() {
    return (
      <section className="awards">
        <ul>
          {this._getAwards()}
        </ul>
      </section>
    )
  }
}
