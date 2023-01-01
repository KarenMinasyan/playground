import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from 'layouts/Auth';
import Login from 'pages/Auth/components/Login';
import './App.scss';

const App: FC = () => (
    <Routes>
        <Route path='' element={<h1>home</h1>}/>
        {/*<Route path='auth/login' element={<Auth />} />*/}
        <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
        </Route>
    </Routes>
);

export default App;
