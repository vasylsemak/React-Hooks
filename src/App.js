import './App.css'
import ApiGithub from './ApiGithub'
import Counter from './Counter'
import { Route, Link } from 'react-router-dom'


const App = () => (
  <div className="App">
    <div className="links">
      <Link to="/counter">Counter</Link>
      <Link to="/">Home</Link>
    </div>
    <Route exact path="/counter" component={Counter} />
    <Route
      exact path="/"
      render={routerProps => <ApiGithub login='vasylsemak' {...routerProps} />}
    />
  </div>
)

export default App
