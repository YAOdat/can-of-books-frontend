import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Welcome extends React.Component {
    render() {

        const { isAuthenticated } = this.props.auth0;
        return (
            !isAuthenticated &&( <> 
                <h3>Welcome to Your Can of Books!</h3>
                <p>Plase log into your account</p>
            </>)
        );
    }
}

export default withAuth0(Welcome);
