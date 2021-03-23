import React from "react"
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import {Switch, Route, HashRouter} from "react-router-dom";



function Router() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/chat" component={ChatPage}/>
        </Switch>
      </HashRouter>
    )
  }
  
  export default Router;