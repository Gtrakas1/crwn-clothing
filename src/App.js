import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shoppage/shop.jsx'


function App() {
  return (
    <div >
    <Switch>
  <Route exact path='/' component={HomePage}/>    
  <Route  path='/shop' component={ShopPage}/>    
  </Switch>  
  </div>
    
  );
}

export default App;
