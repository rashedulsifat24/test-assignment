import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
import useAuth from './../../Hooks/useAuth';
const Login = () => {
	const { user, logInWithGoogle } = useAuth();
	const location=useLocation();
    const history=useHistory();
    const redirect_url=location.state?.from || '/';

	//handel google login
	const handelGooglelogin=()=>{
		logInWithGoogle()
		 .then(result=>{
        history.push(redirect_url);
       })
	}

	
	return (
		<div className="mt-2">
			<div className="login-form w-50 mx-auto ">
                <div class="container login-container">
				<div class="row">
					<div class="col-md-12 login-form-1">
						<h3>Please Login</h3>

						<div class="form-group">
							<input type="text" class="form-control" placeholder="Your Email *" value="" />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Your Password *" value="" />
						</div>
						<div class="form-group">
							<input type="submit" class="btnSubmit" value="Login" />
						</div>
                        <div className="form-group">
                            <Link to="/register">New User ?</Link>
                        </div>
						<div class="form-group">
							<a href="#" class="btnForgetPwd">
								Forget Password?
							</a>
						</div>
					</div>
				</div>
			</div>
            </div>
			<button className="btn btn-dark mb-4" onClick={handelGooglelogin}>sign in with google</button>
		</div>
	);
};

export default Login;
