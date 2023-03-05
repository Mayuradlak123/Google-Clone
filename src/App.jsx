import HomePage from "./Components/HomePage";
import React from "react";
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResultPage from "./Components/ResultPage";
function App() {
  return (
    <>
   
     <Router>
        <div className="">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={ResultPage}/>
          </Switch>
        </div>
      </Router> 
    </>
  );
}
// Main file of This App
export default App;
