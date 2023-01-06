import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from 'hoc/protectedRoute';
import DashboardLayout from 'layouts/Dashboard';
import AuthLayout from 'layouts/Auth';
import { ROUTES } from './router';
import './App.scss';

const App: FC = () => (
    <Routes>
        <Route path='' element={<ProtectedRoute />}>
            <Route index element={<DashboardLayout />}/>
        </Route>
        <Route path='auth' element={<AuthLayout />}>
            {ROUTES.map(item => <Route key={item.id} {...item} />)}
        </Route>
    </Routes>
);

export default App;
