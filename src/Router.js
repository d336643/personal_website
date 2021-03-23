import React from "react"
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import {Switch, Route, HashRouter as Router} from "react-router-dom";



function Router() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/chat" component={ChatPage}/>
        </Switch>
      </Router>
    )
  }
  
  export default Router;