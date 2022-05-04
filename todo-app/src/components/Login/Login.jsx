import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';

function Login() {

    const [usernameLog, setusernameLog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let user = localStorage.getItem('username').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!usernameLog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (usernameLog !== user)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter username" onChange={(event) => setusernameLog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Date incorect.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login
