import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import BuisnessList from './buisness/BuisnessList'
import BuisnessCreate from './buisness/BuisnessCreate'
import BuisnessShow from './buisness/BuisnessShow'
import BuisnessEdit from './buisness/BuisnessEdit'
import BuisnessDelete from './buisness/BuisnessDelete'
import GoogleAuthIdentity from "./GoogleAuthIdentity";
import history from "../history";


const App = () => {
  return (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Route path='/' exact component={BuisnessList} />
        <Route path='/buisness/new' exact component={BuisnessCreate}></Route>
        <Route path='/buisness/edit/:id' exact component={BuisnessEdit} />
        <Route path='/buisness/delete' exact component={BuisnessDelete} />
        <Route path='/buisness/show' exact component={BuisnessShow} />
        <Route path='/auth2' exact component={GoogleAuthIdentity} />
      </div>
    </Router>
  </div>
  )
}

export default App;