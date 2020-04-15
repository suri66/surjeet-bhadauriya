import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage';
import Header from './components/Common/Header/header';
import Covid19Page from './pages/Covid19Page';
import ServicePage from './pages/ServicePage';
import TeamPage from './pages/TeamPage';


const App = (
  <Router>
    <div>
      <Header />      
      <Switch>
        <Route exact path="/" component={Covid19Page} />
        <Route path="/about" component={HomePage} />        
        <Route path="/contact" component={HomePage} />        
        <Route path="/services" component={ServicePage} />        
        <Route path="/portfolio" component={HomePage} />        
        <Route path="/covid19" component={Covid19Page} />        
        <Route path="/team" component={TeamPage} />        
        {/* <Route component={Notfound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>
);


export default App;
