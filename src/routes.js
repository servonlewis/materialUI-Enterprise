import React from 'react'
import App from './App'
import Home from './Containers/Home'
import Callback from './Callback/Callback'
import Auth from './Auth/Auth'
import { Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/Store/configureStore'
import history from './history'

const auth = new Auth()
const store = configureStore()
const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route
            exact
            path='/'
            render={props => <App auth={auth} {...props} />}
          />
          <Route
            path='/home'
            render={props => <Home auth={auth} {...props} />}
          />
          <Route
            path='/callback'
            render={props => {
              handleAuthentication(props)
              return <Callback {...props} />
            }}
          />
        </div>
      </Router>
    </Provider>
  )
}
