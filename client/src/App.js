import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {orgs: [{orgId: "Fetching data..."}]}

  componentDidMount() {
    fetch('/orgs')
      .then(res => res.json())
      .then(orgs => this.setState({ orgs }));
  }

  render() {
    return (
      <div className="App">
        <h1>Scratch Orgs</h1>
        <div>
          <span>Org ID </span>
          <span>Org Name</span>
        </div>
        {this.state.orgs.map(org =>
          <div key={org.orgId}>{org.orgId} {org.username}</div>
        )}
      </div>
    );
  }
}

export default App;