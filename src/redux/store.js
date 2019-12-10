import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';


const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
export default store;