import React from "react"
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


const options = [
  'one', 'two', 'three'
]
const defaultOption = options[0]

class Selection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOptions: [
        'Representatives', 'Senators'
      ],
      statesOptions: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
    }
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Dropdown options={this.state.listOptions} onChange={this._onSelect} value={this.state.listOptions[0]} placeholder="Select a list" />
          <Dropdown options={this.state.statesOptions} onChange={this._onSelect} value={this.state.statesOptions[0]} placeholder="Select a state" />
          <Button variant="contained" color="primary">
            Submit
        </Button>
        </Grid>
      </div>
    )
  }
}

export default Selection