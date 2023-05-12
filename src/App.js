import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import MoviesHomePage from './components/MoviesHomePage'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={MoviesHomePage} />
      </Switch>
    )
  }
}

export default App
