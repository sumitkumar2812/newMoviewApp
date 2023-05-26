import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import MoviesHomePage from './components/Home'
import PageNotFound from './components/PageNotFound'
import Jobs from './components/Popular'
import ProtectedRoute from './components/ProtectedRoute'
import AccountRoute from './components/AccountRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={MoviesHomePage} />
        <ProtectedRoute exact path="/popular" component={Jobs} />
        <ProtectedRoute exact path="/account" component={AccountRoute} />
        <Route path="/not-found" component={PageNotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
