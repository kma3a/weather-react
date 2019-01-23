import {createStore} from 'redux';
import  rootReducer  from "../reducers/rootReducer";

export const configureStore = (preloadedState) => {
   const store = createStore(
     rootReducer,
     preloadedState
   );

  if(process.env.NODE_ENV !== 'production' ){
    if(module.hot) {
      module.hot.accept('../reducers/rootReducer', ()=>{
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      })
    }
  }

  return store;
};
