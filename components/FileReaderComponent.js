import React from 'react';
import ReactDOM from 'react-dom';
export default class FileReader extends React.Component {
  render() {
    return (
      <section className="file-reader">
        <label htmlFor="file-upload">Upload JSON File</label>
        <input accept="json/*" id="test" name="file-upload" className="file-reader" type="file" onChange={this.props.action} />
      </section>
    )
  }
}
