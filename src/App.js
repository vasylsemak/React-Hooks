import './App.css'
import About  from './About'
import Counter from './Counter'
import Todos from './Todos'
import ApiGithub from './ApiGithub'
import { Route, Link, Switch } from 'react-router-dom'


const App = () => (
  <div className="App">
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/about">About</Link>

    </div>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/todos" component={Todos} />
      <Route path="/about" component={About} />
      <Route
        exact path="/"
        render={routerProps => <ApiGithub login='vasylsemak' {...routerProps} />}
      />
    </Switch>
  </div>
)

export default App
