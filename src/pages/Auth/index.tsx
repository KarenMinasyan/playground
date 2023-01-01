import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Playground from "./components/Playground/index.";
import Copyright from "./components/Copyright";
import './Auth.scss';

const Auth: FC = () => {
    return (
        <div className='auth'>
            <div className='auth-inner'>
                <Playground />
                <Outlet />
            </div>
            <Copyright />
        </div>
    );
};

export default Auth;
