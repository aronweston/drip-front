import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userRegisterReducer } from './reducers/userReducer';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
});

//Grab things from local storage and set to the combine reducer property: userLogin = userLogin
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
