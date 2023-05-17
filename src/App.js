import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Jobs from './components/Popular'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/Popular" component={Jobs} />
        <Route path="/not-found" component={PageNotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
