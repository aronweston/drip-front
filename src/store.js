import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const reducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
});

const loginLS = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

//Grab things from local storage and set to the combine reducer property: userLogin = userLogin
const initialState = {
  login: { loginLS },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
