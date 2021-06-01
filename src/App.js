import './App.css'
import ApiGithub from './ApiGithub'
import Counter from './Counter'
import About  from './About'
import { Route, Link, Switch } from 'react-router-dom'


const App = () => (
  <div className="App">
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/about">About</Link>
    </div>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/about" component={About} />
      <Route
        exact path="/"
        render={routerProps => <ApiGithub login='vasylsemak' {...routerProps} />}
      />
    </Switch>
  </div>
)

export default App
