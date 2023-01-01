import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className='login'>
            <form className='login-inner'>
                <h3>Login</h3>
                <label>
                    Enter your email
                    <input type='text'/>
                </label>
                <div className='login-inner__btn'>
                    <button>SEND CODE</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
