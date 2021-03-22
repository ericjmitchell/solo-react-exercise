import './App.css'
import Info from './components/Info'
import Selection from './components/Selection'
import List from './components/List'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Selection />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <List />
          <Info />
        </Grid>
      </header>
    </div>
  )
}

export default App
