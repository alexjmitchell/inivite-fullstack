import React from "react"
import Main from "./Main"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
      </div>
    </Router>
  )
}

export default App
