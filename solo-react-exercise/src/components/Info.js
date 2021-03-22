class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {person: {}};
  }

  render() {
    return (
      <div>
        <h1>Info</h1>
        <h2>{this.state.person.firstname}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Info />,
  document.getElementById('root')
);