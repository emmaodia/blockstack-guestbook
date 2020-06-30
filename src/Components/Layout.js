import React from "react";
import { useBlockstack } from 'react-blockstack';
import SignIn from './SignIn'
import GuestBook from './GuestBook'

function Layout () {
    const { authenticated } = useBlockstack();

    return (
        <div>
            {authenticated ? (
                <div>
                    <GuestBook />
                    
                </div>
            ) : (
                <SignIn />
            )}
        </div>
    )
}

export default Layout;