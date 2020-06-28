import React from 'react';
import { useBlockstack } from 'react-blockstack';
import Header from './Header';
const Register = () => {
    const { authenticated, signOut } = useBlockstack();

    return (
        <div>
            {authenticated ? (
                <div>
                    I'm in!
                    <button onClick={() => { signOut()}}> Sign Out </button>
                </div>
            ) : (
                <Header />
            )}
        </div>
    )
}

export default Register;