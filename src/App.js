import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './modules/Header/Header';
import Home from './modules/Home/Home';
import Checkout from './modules/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          {/* /地址一般放在最后以防止报错 default */}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
