import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from 'layouts/Auth';
import { ROUTES } from './router';
import './App.scss';

const App: FC = () => (
    <Routes>
        <Route path='' element={<h1>home</h1>}/>
        <Route path='auth' element={<AuthLayout />}>
            {ROUTES.map(item => <Route key={item.id} {...item} />)}
        </Route>
    </Routes>
);

export default App;
