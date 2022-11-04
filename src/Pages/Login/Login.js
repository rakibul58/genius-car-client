import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {

    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email , password)
        .then(result=>{
            const user = result.user;
            console.log(user.email);

            const currentUser = {
                email: user.email
            }

            console.log(currentUser);

            //get jwt token
            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                localStorage.setItem('genius-token' , data.token );
                form.reset();
                navigate(from , {replace: true});
            })

            // form.reset();
            // navigate(from , {replace: true});
        })
        .catch(error=>console.log(error));
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
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
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