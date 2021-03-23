import React from 'react';
import Router from './Router';
import Navbar from './NavBar';
import {makeStyles} from "@material-ui/core";



const useStyle = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
  },
  content: {
    backgroundColor: theme.palette.behindBackground,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },

}));

function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.content}>
          <Router className={classes.root}/>
      </div>
      
    </div>
  );
  
}

export default App;