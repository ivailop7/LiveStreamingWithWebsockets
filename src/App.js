import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: []
    };
    this.ws = new WebSocket("ws://127.0.0.1:8888/");
  }

  render() {
    this.ws.onopen = () => {
      console.log('Opened Connection!')
    };

    this.ws.onmessage = (event) => {
      this.setState({ currentData: JSON.parse(event.data) });
    };

    this.ws.onclose = () => {
      console.log('Closed Connection!')
    };

    const columns = [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Number', accessor: 'number' }
    ]
    console.log(this.state.currentData);
    return (
      <div className="App">
        <ReactTable
          data={this.state.currentData}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
