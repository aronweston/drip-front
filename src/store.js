import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import {
  coffeeListReducer,
  coffeeSingleReducer,
} from './reducers/coffeeReducer';
import { cartReducer } from './reducers/cartReducer';
import {
  confirmedOrderReducer,
  createOrderReducer,
  stripeSecretReducer,
  // stripeSecretReducer,
} from './reducers/orderReducer';
import { roasterSingleReducer } from './reducers/roasterReducer';

const reducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
  allCoffee: coffeeListReducer,
  singleCoffee: coffeeSingleReducer,
  singleRoaster: roasterSingleReducer,
  cart: cartReducer,
  order: createOrderReducer,
  stripe: stripeSecretReducer,
  confirmedOrder: confirmedOrderReducer,
});

const getUserFromLS = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const getDeliveryFromLS = localStorage.getItem('delivery')
  ? JSON.parse(localStorage.getItem('delivery'))
  : {};

const getConfirmedOrderFromLS = localStorage.getItem('confirmedOrder')
  ? JSON.parse(localStorage.getItem('confirmedOrder'))
  : {};

const getCartItemsFromLS = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const getPriceFromLS = localStorage.getItem('totalPrice')
  ? JSON.parse(localStorage.getItem('totalPrice'))
  : [];

//Grab things from local storage and set to the combine reducer property: userLogin = userLogin
const initialState = {
  login: { user: getUserFromLS },
  cart: {
    cartItems: getCartItemsFromLS,
    totalPrice: getPriceFromLS,
    // delivery: getDeliveryFromLS,
  },
  confirmedOrder: getConfirmedOrderFromLS,
};

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), thunk]
    : [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
