import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
	return (
		<div className="mt-3">
			<div className="login-form w-50 mx-auto ">
				<div class="container login-container">
					<div class="row">
						<div class="col-md-12 login-form-1">
							<h3>Register now</h3>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Enter your Name *" value="" />
							</div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Your Email *" value="" />
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="Your Password *" value="" />
							</div>
							<div class="form-group">
								<input type="submit" class="btnSubmit" value="Registetion" />
							</div>
							<div className="form-group">
								<Link to="/login">allready regi ?</Link>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
