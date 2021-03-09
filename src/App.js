import React, { useEffect } from 'react';
import axios from 'axios';
import API from './config/api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderSuccess from './pages/OrderSuccess';
import Checkout from './pages/PaymentForm';
import SingleCoffee from './pages/SingleCoffee';

function App() {
  useEffect(() => {
    axios
      .get(API)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Router>
        {/* <SubHeader /> */}
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/checkout' component={Checkout} /> */}
          <Route path='/landing' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/coffee/:id' component={SingleCoffee} />
          <Route path='/checkout/success/:id' component={OrderSuccess} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
