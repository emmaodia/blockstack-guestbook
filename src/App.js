import React from 'react';
import Header from './Components/Header';
import Register from './Components/Register';
import { appCpnfig } from './assets/constants';
import { Connect } from '@blockstack/connect';

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

function App() {
  return (
    <>
      <Connect authOptions={authOptions}>
        <Header />
        <div className="flex flex-wrap mt-20">
          <Register />
        </div>
        <div>Welcome...</div>
      </Connect>
    </>
  );
}

export default App;
