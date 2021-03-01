import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Recom from './pages/Recom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/landing' component={Landing} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/quiz' component={Quiz} />
          <Route exact path='/recommendation' component={Recom} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
