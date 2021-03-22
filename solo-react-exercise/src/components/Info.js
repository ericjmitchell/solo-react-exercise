import React from "react"
import { connect } from "react-redux"

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  firstName() {
    if (this.state.person && this.state.person.name) {
      return this.state.person.name.split(' ')[0]
    } else {
      return ""
    }
  }

  lastName() {
    if (this.state.person && this.state.person.name) {
      return this.state.person.name.split(' ')[1]
    } else {
      return ""
    }
  }

  district() {
    if (this.state.person) {
      return this.state.person.district
    } else {
      return ""
    }
  }

  phone() {
    if (this.state.person) {
      return this.state.person.phone
    } else {
      return ""
    }
  }

  office() {
    if (this.state.person) {
      return this.state.person.office
    } else {
      return ""
    }
  }

  render() {
    return (
      <div>
        <h1>Info</h1>
        <h2>{this.firstName()}</h2>
        <h2>{this.lastName()}</h2>
        <h2>{this.district()}</h2>
        <h2>{this.phone()}</h2>
        <h2>{this.office()}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { person } = state
  return { person }
}

export default connect(mapStateToProps)(Info)