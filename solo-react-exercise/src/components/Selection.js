import React from "react"
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from './List'
import { updatePeople } from '../store/people/peopleSlice'
import { getList } from '../services/people'
import { connect } from "react-redux"

class Selection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOptions: [
        'Representatives', 'Senators'
      ],
      statesOptions: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
      selectedList: 'Representatives',
      selectedState: 'AL'
    }
  }

  listChange(selector) {
    this.setState(state => ({
      ...state,
      selectedList: selector.value
    }))
  }

  stateChange(selector) {
    this.setState(state => ({
      ...state,
      selectedState: selector.value
    }))
  }

  submit() {
    if (this.state.selectedList && this.state.selectedState) {
      getList(this.state.selectedList, this.state.selectedState).then((resp) => {
        this.props.onUpdate(resp.results)
      })
    }
  }

  render() {
    return (
      <div height="100%">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Dropdown options={this.state.listOptions} onChange={this.listChange.bind(this)} value={this.state.listOptions[0]} placeholder="Select a list" />
          <Dropdown options={this.state.statesOptions} onChange={this.stateChange.bind(this)} value={this.state.statesOptions[0]} placeholder="Select a state" />
          <Button variant="contained" color="primary" onClick={() => this.submit()}>
            Submit
        </Button>
        </Grid>
        <List />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (people) => dispatch(updatePeople(people))
  }
}

export default connect(null, mapDispatchToProps)(Selection)