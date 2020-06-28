import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './Components/Register';
import { appCpnfig } from './assets/constants';
import { Connect } from '@blockstack/connect';
import ReactBlockstack, { useBlockstack, didConnect, useFile } from 'react-blockstack';
import { appConfig } from './assets/constants';

ReactBlockstack({ appConfig });

const App = props => {

  const { showOnBoard } = props;

  const authOptions = {
    redirectTo: '/',
    finished: ({ userSession }) => {
      console.log(userSession.loadUserData());
    },
    appDetails: {
      name: 'BlockStack Guest Book',
      icon: window.location.origin + '/register.svg',
    },
  };

  return (
    <>
      <Connect authOptions={authOptions}>
        <div className="flex flex-wrap mt-20">
          <Register>
            <div>Welcome...</div>
            <Switch>
              <Route path="/register" component={Register}>
              {showOnBoard && <Redirect to="/register" />}
              </Route>
            </Switch>
          </Register>
        </div>       
      </Connect>
    </>
  );
}

export default App;
