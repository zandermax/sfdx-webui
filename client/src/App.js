import React, { Component } from 'react'

// import PropTypes from 'prop-types';

// import Button from 'material-ui/Button'
import Table from 'material-ui/Table'
import TableBody from 'material-ui/Table/TableBody'
import TableRow from 'material-ui/Table/TableRow'
import TableCell from 'material-ui/Table/TableCell'
import TableHead from 'material-ui/Table/TableHead'
import TableSortLabel from 'material-ui/Table/TableSortLabel'

import Button from 'material-ui/Button'
import Delete from 'material-ui-icons/Delete'
import AppBar from 'material-ui/AppBar/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar'
import Checkbox from 'material-ui/Checkbox/Checkbox'
import Modal from 'material-ui/Modal/Modal'
import Typography from 'material-ui/Typography'

class App extends Component {
  state = { orgs: [{ orgId: 'Fetching data...' }] }

  componentDidMount () {
    fetch('/orgs').then(res => res.json()).then(orgs => this.setState({ orgs }))
  }

  render () {
    return (
      <div className='App'>
        <AppBar position='static' color='default'>
          <Toolbar>
            Scratch Orgs
          </Toolbar>
        </AppBar>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell><TableSortLabel>Alias</TableSortLabel></TableCell>
              <TableCell><TableSortLabel>Org ID</TableSortLabel></TableCell>
              <TableCell><TableSortLabel>Org Name</TableSortLabel></TableCell>
              <TableCell><TableSortLabel>Expiration Date</TableSortLabel></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.orgs.map(org => (
              <TableRow key={org.orgId}>
                <Checkbox />
                <TableCell>{org.alias}</TableCell>
                <TableCell key={org.orgId}>{org.orgId}</TableCell>
                <TableCell>{org.username}</TableCell>
                <TableCell>{org.expirationDate}</TableCell>
                <TableCell>
                  <Button raised color='accent'>
                    Delete
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

export default App
