import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import { store, persistor } from './redux/store';
// Pages
import Main from './pages/Main';
import Login from './pages/Login';
import Modal from './components/modal';
// Components
import AppLoading from './components/appLoading';
// Styles
import './App.scss';

export default function App() {
  const location = useLocation();
  const showModal = location.state && location.state.showModal;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Switch location={showModal || location}>
            <Route
              path="/"
              exact
              // render={()=>
              //   this.props.currentUser?(<Main/>) : (<Redirect to='/login'/>)
              // }
              component={Main}
            />

            <Route
              path="/login"
              exact
              component={Login}
            />

            <Route path="/todo/:id" component={Login} />

          </Switch>
          {showModal && (
          <Route
            path="/todo/:id"
          >
            <Modal />
          </Route>
          )}
        </div>
        <AppLoading />
      </PersistGate>
    </Provider>
  );
}
