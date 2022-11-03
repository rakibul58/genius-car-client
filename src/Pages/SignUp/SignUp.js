import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email , password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err=>console.error(err))
    }
    return (
        <div className="hero my-20 w-full">
            <div className="hero-content flex-col grid gap-20 md:grid-cols-2 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-3">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error hover:bg-transparent" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center mb-6">Already Have an Account? <Link to='/login' className='font-bold text-error'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;