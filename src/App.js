import React, { useEffect } from 'react';
import axios from 'axios';
import URL from './url';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import NavBar from './components/NavBar';
import SubNav from './components/SubNav';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderSuccess from './pages/OrderSuccess';
import Checkout from './pages/PaymentForm';

function App() {
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Router>
        {/* <SubNav /> */}
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/checkout' component={Checkout} /> */}
          <Route path='/landing' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/checkout/success/:id' component={OrderSuccess} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
