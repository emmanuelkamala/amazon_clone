import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
   <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">Amazon Clone</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>

    </header>

    <main>
      <Switch>
        <Route path='/product/:id' component={ProductScreen} ></Route>
        <Route path="/" component={HomeScreen} exact ></Route>
      </Switch>
    </main>

    <footer className="row center">
      All Rights Reserved
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
