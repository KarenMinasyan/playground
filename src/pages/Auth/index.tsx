import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import Playground from './components/Playground';
import Copyright from './components/Copyright';
import './Auth.scss';

const Auth: FC = () => (
  <div className='auth'>
    <div className='auth-inner'>
      <Playground/>
      <Outlet/>
    </div>
    <Copyright/>
  </div>
);

export default Auth;
