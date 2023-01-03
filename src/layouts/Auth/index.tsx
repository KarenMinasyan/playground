import React, {FC} from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import Auth from 'pages/Auth';

const AuthLayout: FC = () => {
	  const auth = useAuth();
	  return auth ? <Navigate to='' /> : <Auth />;
};

export default AuthLayout;
