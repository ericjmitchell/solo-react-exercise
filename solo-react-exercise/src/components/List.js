import React from "react"
import { DataGrid } from '@material-ui/data-grid'
import { updatePerson } from '../store/people/personSlice'
import { connect } from "react-redux"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'shortParty', headerName: 'Party', width: 100 }
      ]
    }
  }

  setSelection(rows) {
    console.log(rows)
    this.props.onUpdate(rows[0])
  }

  shortenParty(party) {
    return party[0]
  }

  render() {
    return (
      <div style={{ height: 400, width: '100%' }}>
          <DataGrid scrollbarSize="0" rows={this.props.people} columns={this.state.columns} pageSize={5}
            onSelectionChange={(newSelection) => {
              this.setSelection(newSelection.rows)
            }} />
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