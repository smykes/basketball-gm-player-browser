import React from 'react';
import ReactDOM from 'react-dom';
import TableCell from './TableCellComponent';
export default class TableRow extends React.Component {
  _getTableCells() {
    let ret = [];
    let cats = ['season', 'gp', 'min', 'pts', 'trb', 'ast','stl','blk'];
    cats.forEach((cat, index) => {
      var val = (cat === 'min') ? Math.round(this.props.player.stats[this.props.index][cats[index]]) : this.props.player.stats[this.props.index][cats[index]]
      ret.push(<TableCell key={index} category={cat} value={val}/>);
    });
    return ret;
  }
  render() {
    return (
      <tr>{this._getTableCells()}</tr>
    )
  }
}
