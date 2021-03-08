import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import OrderSuccess from './pages/OrderSuccess';
import CheckoutForm from './pages/CheckoutForm';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
  'pk_test_51IQKncEXawQ3zSFqMyx5IgXbNgO3Vg5TpH5vSibV6Y7StRyLz5zjQahBy6G09k9RYdbUoe838y5fVESIsNeZtSwf00y5IUe2ke'
);

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route
          render={(props) => (
            <Elements stripe={stripePromise}>
              <CheckoutForm {...props} />
            </Elements>
          )}
          path={'/checkout'}
        />
        <Route path='/landing' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/checkout/success/:id' component={OrderSuccess} />
      </Router>
    </>
  );
}

export default App;
