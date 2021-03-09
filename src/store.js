import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import {
  coffeeListReducer,
  coffeeSingleReducer,
} from './reducers/coffeeReducer';

const reducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
  allCoffee: coffeeListReducer,
  singleCoffee: coffeeSingleReducer,
});

const getUserFromLS = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

//Grab things from local storage and set to the combine reducer property: userLogin = userLogin
const initialState = {
  login: { user: getUserFromLS },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
