import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import MoviesHome from './components/Home'
import PageNotFound from './components/PageNotFound'
import Popular from './components/Popular'
import ProtectedRoute from './components/ProtectedRoute'
import AccountRoute from './components/AccountRoute'
import MovieItemDetails from './components/MovieItemDetails'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={MoviesHome} />
        <ProtectedRoute exact path="/Popular" component={Popular} />
        <ProtectedRoute exact path="/account" component={AccountRoute} />
        <ProtectedRoute
          exact
          path="/movie-details"
          component={MovieItemDetails}
        />

        <Route path="/not-found" component={PageNotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
