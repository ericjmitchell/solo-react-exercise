import './App.css'
import Selection from './components/Selection'
import List from './components/List'
import Grid from '@material-ui/core/Grid'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <header >
        <h1>Find Your Representatives!</h1>
      </header>
      <body>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Selection />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}
              justify="center">
              <Grid item xs={4}>
                <List />
              </Grid>
              <Grid item xs={4}>
                <Info />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </body>
    </div>
  )
}

export default App
