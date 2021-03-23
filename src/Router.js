import React from "react"
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import {Switch, Route} from "react-router-dom";



function Router() {
    return (
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/chat" component={ChatPage}/>
        </Switch>
    )
  }
  
  export default Router;