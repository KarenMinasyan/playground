import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const ProtectedRoute = () => {
	const auth = useAuth();
	return auth ? <Outlet /> : <Navigate to='auth/login' />;
};

export default ProtectedRoute;
