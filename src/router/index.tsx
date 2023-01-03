import {lazy, Suspense} from 'react';

export const Code = lazy(() => import('pages/Auth/components/Code'));
export const Login = lazy(() => import('pages/Auth/components/Login'));

export const ROUTES = [
    {
        id: 'login',
        path: 'login',
        element: (
            <Suspense fallback={<div className='loader'></div>}>
                <Login/>
            </Suspense>
        ),
    },
    {
        id: 'code',
        path: 'code',
        element: (
            <Suspense fallback={<div className='loader'></div>}>
                <Code/>
            </Suspense>
        ),
    },
];
