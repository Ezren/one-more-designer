import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layouts, Thesis } from './composites'

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <Thesis />
      </Route>
      <Route path="/">
        <Layouts />
      </Route>
    </Switch>
  </Router>
)

export default App
