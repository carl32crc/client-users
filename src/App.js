import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import routes from './routes'

import './App.css'

function App() {
  return (
    <Router>
      <Switch>
      {routes.map(({ component, path }, index) => 
        <Route key={index} path={path}>
          {component}
        </Route>
      )}
      </Switch>
    </Router>
  )
}

export default App;
