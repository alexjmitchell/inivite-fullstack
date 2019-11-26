import React from "react"
import Main from "./Main"
import Going from "./Going"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = props => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Main} />
        <Route path="/going" component={Going} />
      </div>
    </Router>
  )
}

export default App
