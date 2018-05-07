import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
window.store = store;
console.log('store ', store.getState())
store.subscribe(()=> {console.log('subscribe ', store.getState())})
export default store;
