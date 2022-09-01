import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import BuisnessList from './buisness/BuisnessList'
import BuisnessCreate from './buisness/BuisnessCreate'
import BuisnessShow from './buisness/BuisnessShow'
import BuisnessEdit from './buisness/BuisnessEdit'
import BuisnessDelete from './buisness/BuisnessDelete'
import GoogleAuthIdentity from "./GoogleAuthIdentity";
import LandingPage from "./LandingPage";
import history from "../history";
import '../App.css'


const App = () => {
  return (
  <div id='app' className="ui container">
    <Router history={history}>
      <div>
        
          <Header />
          <Switch>
            <Route path='/' exact component={BuisnessList} />
            <Route path='/buisness/new' exact component={BuisnessCreate}></Route>
            <Route path='/buisness/edit/:id' exact component={BuisnessEdit} />
            <Route path='/buisness/delete/:id' exact component={BuisnessDelete} />
            <Route path='/buisness/show/:id' exact component={BuisnessShow} />
            <Route path='/auth2' exact component={GoogleAuthIdentity} />
            <Route path='/home' exact component={LandingPage} />
        </Switch>   
      </div>
    </Router>
  </div>
  )
}

export default App;