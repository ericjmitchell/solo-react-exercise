import React from "react"
import { DataGrid } from '@material-ui/data-grid'
import Info from './Info'
import { updatePerson } from '../store/people/personSlice'
import { connect } from "react-redux"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { field: 'name', headerName: 'Name', width: 160 },
        { field: 'party', headerName: 'Party', width: 70 }
      ]
    }
  }

  setSelection(rows) {
    this.props.onUpdate(rows[0])
  }

  shortenParty(party) {
    return party[0]
  }

  render() {
    return (
      <div>
        <DataGrid rows={this.props.people} columns={this.state.columns} pageSize={5}
          onSelectionChange={(newSelection) => {
            this.setSelection(newSelection.rows)
          }} />
        <Info />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { people: state.people }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (person) => dispatch(updatePerson(person))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)