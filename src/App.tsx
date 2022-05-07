import React from 'react'
import Dashboard from './dashboard';

import './firebase/config';
import { auth } from './firebase/config';
import SignInSide from './sign-in-side/SignInSide';

function App() {
    const [signedIn, setSeignedIn] = React.useState(Boolean(auth.currentUser));

    console.log({ signedIn: auth.currentUser });

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setSeignedIn(Boolean(user));
        });
    }, []);

    return (
        <div className="App">
            {!signedIn ? <SignInSide /> : <Dashboard user={auth.currentUser} />}
        </div>
    );
}

export default App;
