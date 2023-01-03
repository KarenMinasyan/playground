import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'hook';
import { clearDone } from 'store/auth/authSlice';
import {useNavigate} from 'react-router-dom';
import {authSelector} from 'helpers/reduxSelectors';

const Code = () => {
    const { status } = useAppSelector(authSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!status) {
            navigate('/auth/login');
        }

       return () => {
           dispatch(clearDone())
       }
    }, [status]);

    return (
        <div>
            code...
        </div>
    );
};

export default Code;
