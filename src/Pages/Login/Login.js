import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className="hero my-20 w-full">
            <div className="hero-content flex-col grid gap-20 md:grid-cols-2 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-3">Login now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error hover:bg-transparent" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center mb-6">New to Genius Car? <Link to='/signup' className='font-bold text-error'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;