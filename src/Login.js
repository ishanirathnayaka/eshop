import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase'; 
import { useNavigate } from 'react-router-dom';  

export default function Login() {
    const navigate = useNavigate();  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
          .then((auth) => {  
              navigate('/');  
          })
          .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
          .then((auth) => { 
              if (auth) {
                navigate('/');  
              }
          })
          .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="login_logo">
                    <StorefrontIcon className="login_logoImage" fontSize="large" />
                    <h2 className="login_logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="login_signInButton" onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the eSHOP website conditions of use & sale.
                    Please see our Privacy Notice, our Cookies Notice, and our
                    Interest-Based Ads Notice.
                </p>

                <button className="login_registerButton" onClick={register}>
                    Create Your eSHOP Account
                </button>
            </div>
        </div>
    );
}
