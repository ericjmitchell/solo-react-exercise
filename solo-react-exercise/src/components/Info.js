import React from "react"
import { connect } from "react-redux"

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  firstName() {
    if (this.props.person && this.props.person.name) {
      return this.props.person.name.split(' ')[0]
    } else {
      return ""
    }
  }

  lastName() {
    if (this.props.person && this.props.person.name) {
      return this.props.person.name.split(' ')[1]
    } else {
      return ""
    }
  }

  district() {
    if (this.props.person) {
      return this.props.person.district
    } else {
      return ""
    }
  }

  phone() {
    if (this.props.person) {
      return this.props.person.phone
    } else {
      return ""
    }
  }

  office() {
    if (this.props.person) {
      return this.props.person.office
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
  return { person: state.person }
}

export default connect(mapStateToProps)(Info)