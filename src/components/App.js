import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import BuisnessList from './buisness/BuisnessList'
import BuisnessCreate from './buisness/BuisnessCreate'
import BuisnessShow from './buisness/BuisnessShow'
import BuisnessEdit from './buisness/BuisnessEdit'
import BuisnessDelete from './buisness/BuisnessDelete'
import GoogleAuthIdentity from "./GoogleAuthIdentity";


const App = () => {
  return (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/' exact component={BuisnessList} />
        <Route path='/buisness/new' exact component={BuisnessCreate}></Route>
        <Route path='/buisness/edit' exact component={BuisnessEdit} />
        <Route path='/buisness/delete' exact component={BuisnessDelete} />
        <Route path='/buisness/show' exact component={BuisnessShow} />
        <Route path='/auth2' exact component={GoogleAuthIdentity} />
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App;