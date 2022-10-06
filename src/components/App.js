import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import businessList from './business/businessList'
import businessCreate from './business/businessCreate'
import businessShow from './business/businessShow'
import businessEdit from './business/businessEdit'
import businessDelete from './business/businessDelete'
import GoogleAuthIdentity from "./GoogleAuthIdentity";
import LandingPage from "./LandingPage";
import history from "../history";
import '../App.css'


const App = () => {
  return (
  <div id='app'>
    <Router history={history}>
      <div>
        
          <Header />
          <Switch>
            <Route path='/' exact component={businessList} />
            <Route path='/business/new' exact component={businessCreate}></Route>
            <Route path='/business/edit/:id' exact component={businessEdit} />
            <Route path='/business/delete/:id' exact component={businessDelete} />
            <Route path='/business/show/:id' exact component={businessShow} />
            <Route path='/auth2' exact component={GoogleAuthIdentity} />
            <Route path='/home' exact component={LandingPage} />
        </Switch>   
      </div>
    </Router>
  </div>
  )
}

export default App;