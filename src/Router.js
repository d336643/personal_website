import React from "react"
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import {Switch, Route, BrowserRouter} from "react-router-dom";



function Router() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/chat" component={ChatPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;