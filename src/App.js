import React, { useCallback }  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Register from './Components/Register';
// import { appCpnfig } from './assets/constants';
import { Connect } from '@blockstack/connect';
import ReactBlockstack, { useBlockstack, didConnect } from 'react-blockstack';
import { appConfig } from './assets/constants';
import Layout from './Components/Layout';
import GuestBook from './Components/GuestBook';

ReactBlockstack({ appConfig });

const App = props => {

  // const { showOnBoard } = props;
  const { userSession } = useBlockstack();

  const finished = useCallback(() => {
    didConnect({ userSession });
  }, [userSession]);

  const authOptions = {
    redirectTo: '/',
    finished,
    appDetails: {
      name: 'BlockStack Guest Book',
      icon: `${window.location.origin}/register.svg`,
    },
    userSession,
  };

  return (
      <Connect authOptions={authOptions}>
        <div className="flex flex-wrap mt-20">
          <Layout>
            <Switch>
              <Route exact path="/guest-book" component={GuestBook}>
                <Redirect to="/guest-book" />
              </Route>
            </Switch>
          </Layout>
        </div>       
      </Connect>
  );
}

export default App;
