import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {store,persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react'

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
