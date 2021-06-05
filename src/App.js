import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/normalize.css'
import './styles/animations.css'
import './styles/style.css'
import './styles/mediaqueries.css'

import Navigation from './components/Navigation'
import Home from './components/Home'

const App = () => {

  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default App