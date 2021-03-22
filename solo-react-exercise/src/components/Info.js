import React from "react"

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name: 'FirstName LastName',
        district: "District",
        phone: 'Phone number',
        office: 'Office'
      }
    }
  }

  firstName() {
    if (this.state.person.name) {
      return this.state.person.name.split(' ')[0]
    } else {
      return ""
    }
  }

  lastName() {
    if (this.state.person.name) {
      return this.state.person.name.split(' ')[1]
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
        <h2>{this.state.person.district}</h2>
        <h2>{this.state.person.phone}</h2>
        <h2>{this.state.person.office}</h2>
      </div>
    )
  }
}

export default Info