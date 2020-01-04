/**
   * store 
   * using redux-persist to persist store (save store after refresh)
   * using redux-thunk as middlewar for async logic
   */

import { persistReducer ,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import rootReducer from '../reducers'

// to use Redux DevTools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['filter', 'search'] // don't store filter and search state
}

const persistRootReducer = persistReducer(rootPersistConfig, rootReducer)

const store = createStore(
  persistRootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

// persist Store
const persistor = persistStore(store)

export {store, persistor};