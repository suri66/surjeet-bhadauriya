import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Common/Header/header';
import Covid19Page from './pages/Covid19Page';


const App = (
  <Router>
    <div>
      <Header />      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={AboutPage} />        
        <Route path="/covid19" component={Covid19Page} />        
        {/* <Route component={Notfound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>
);


export default App;
