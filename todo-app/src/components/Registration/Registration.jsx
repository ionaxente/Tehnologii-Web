import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("username", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)
        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
                </div>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Choose your Profession</label>
                    <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                        <option>Developer</option>
                        <option>Artist</option>
                        <option>Photographer</option>
                        <option>Team Player</option>
                        <option>Full Stack</option>
                    </Form.Control>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Deja esti inregistrat <a href="#" onClick={handleClick} >Logheaza-te?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Trebuie de completat toate campurile!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    <p><strong>Company:</strong> Axente Ion. SRL</p>
                    <p><strong>Address:</strong> Chisinau</p>
                    <p><strong>Phone:</strong> 37360805368</p>
                    <p><strong>Email:</strong> axente.ion@iis.utm.md</p>
                </div>}
        </>
    )
}

export default Registration
