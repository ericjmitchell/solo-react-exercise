import React from "react"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {
          name: 'Test 1',
          party: 'Republican'
        },
        {
          name: 'Test 2',
          party: 'Democrat'
        }
      ]
    }
  }

  shortenParty(party) {
    return party[0]
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table className="People" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Party</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.people.map((person) => (
              <TableRow key={person.name}>
                <TableCell component="th" scope="row">
                  {person.name}
                </TableCell>
                <TableCell align="left">{this.shortenParty(person.party)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default List