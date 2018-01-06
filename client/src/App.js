import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Table from 'material-ui/Table'

import './App.css'
import TableBody from 'material-ui/Table/TableBody'
import TableRow from 'material-ui/Table/TableRow'
import TableCell from 'material-ui/Table/TableCell'
import TableHead from 'material-ui/Table/TableHead'
import TableSortLabel from 'material-ui/Table/TableSortLabel'

class App extends Component {
  state = { orgs: [{ orgId: 'Fetching data...' }] }

  componentDidMount () {
    fetch('/orgs').then(res => res.json()).then(orgs => this.setState({ orgs }))
  }

  render () {
    return (
      <div className='App'>
        <h1>Scratch Orgs</h1>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell><TableSortLabel>Org ID</TableSortLabel></TableCell>
              <TableCell><TableSortLabel>Org Name</TableSortLabel></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.orgs.map(org => (
              <TableRow key={org.orgId}>
                <TableCell key={org.orgId}>{org.orgId}</TableCell>
                <TableCell> {org.username}</TableCell>
                <TableCell><Button>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>
    )
  }
}

export default App
