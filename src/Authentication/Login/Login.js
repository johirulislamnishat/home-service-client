import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {


    const [loginData, setLoginData] = useState({});
    const { authError, isLoading, signInUsingEmail, signInUsingGoogle, saveUser } = useAuth();

    // session storage 
    const [user, setUser] = useState({});

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        signInUsingEmail(loginData.email, loginData.password, location, history)

        //redirect
        history.push(redirect_uri);
        // console.log(loginData.email);
        //session storage
        setUser(loginData.email);
        localStorage.setItem("email", loginData.email);

        alert('Login Success!!!')
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
            .then(result => {

                //redirect
                history.push(redirect_uri);

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                //session storage
                setUser(result.user);
                localStorage.setItem("email", result.user.email);
                // console.log(result.user);
            })
    }

    return (
        <>
            <Header />

            <div className="mt-5 container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6 d-flex justify-content- center align-items- center">
                            <div className="card1 pb-5">

                                <div className="row px-3 mt-4 mb-5 border-line"> <img src="https://i.ibb.co/WxwSkC7/home-serve.png" className="image" alt='icon' /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div>
                                    <form onSubmit={handleLogin}>
                                        <h4 style={{ textAlign: 'center' }}>Sign In Your Account</h4>
                                        <p className="hint-text">Sign in with your social media account or email address</p>
                                        <div className="social-btn text-center">

                                            <button onClick={handleGoogleLogin} href="#" className="btn btn-danger btn-lg"><i className="fab fa-google-plus-g"></i> Google</button>
                                            <button className="btn btn-info btn-lg"><i className="fab fa-twitter"></i> Twitter</button>

                                        </div>
                                        <div className="or-seperator"><b>or</b></div>
                                        <div className="form-group">
                                            {/* <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" /> */}
                                        </div>
                                        <div className="form-group">
                                            <input name='email' onChange={handleOnChange} type="email" className="form-control input-lg" placeholder="Email Address" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input name='password' onChange={handleOnChange} type="password" className="form-control input-lg" placeholder="Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn-main btn-lg btn-block signup-btn">Sign In</button>
                                        </div>
                                    </form>

                                    {/* error  */}

                                    {
                                        authError && <div>{authError}</div>
                                    }

                                </div>

                                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <Link to='/registration' className="text-danger ">Register</Link></small> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>


    );
};

export default Login;