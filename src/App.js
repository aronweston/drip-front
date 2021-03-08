import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Recom from './pages/Recom';
import CheckoutForm from './CheckoutForm';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path='/' component={CheckoutForm} />
        <Route path='/checkout' component={CheckoutForm} />
        <Route path='/landing' component={Landing} />
        <Route path='/cart' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/recommendation' component={Recom} />
        <Route path='/order/success/:id' component={OrderSuccess} />
      </Router>
    </>
  );
}

export default App;
