import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { VALIDATE_MESSAGES } from 'helpers/constants';
import './Login.scss';

const { FIELD_REQUIRED } = VALIDATE_MESSAGES;

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isValid},
    } = useForm({mode: 'onChange'});

    useEffect(() => {
        const subscription = watch(v => v);
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = (data: any) => {
        const newData = {
            email: data.email,
            languageID: '1',
        }

        console.log(newData);
    }

    return (
        <div className='login'>
            <form className='login-inner' onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>
                <label>
                    Enter your email
                    <input
                        type='text'
                        {...register('email', {
                            required: FIELD_REQUIRED,
                        })}/>
                </label>
                {/*{errors.email && <span className='error'>{errors.email?.message}</span>}*/}
                <div className='login-inner__btn'>
                    <button>SEND CODE</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
