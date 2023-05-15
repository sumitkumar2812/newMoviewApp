import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import MoviesHomePage from './components/MoviesHomePage'
import PageNotFound from './components/PageNotFound'

import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={MoviesHomePage} />
        <Route path="/not-found" component={PageNotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
