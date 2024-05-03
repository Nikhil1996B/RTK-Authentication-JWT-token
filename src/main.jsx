import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './common/utils/history'
import { getToken } from './common/utils/clientStorage'

import store from './store/configureStore'
import { fetchUserData } from './store/slices/authThunk'

if (getToken()) {
  store.dispatch(fetchUserData())
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router history={history}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>
)
