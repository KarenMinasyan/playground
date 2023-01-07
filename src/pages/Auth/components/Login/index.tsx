import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {VALIDATE_MESSAGES} from 'helpers/constants';
import Button from 'components/common/Button';
import Error from 'components/Error';
import {FormValues, LoginType} from 'types';
import {useAppDispatch, useAppSelector} from 'hook';
import {signIn} from 'store/auth/thunks';
import { clearError } from 'store/auth/authSlice';
import {authSelector} from 'helpers/reduxSelectors';
import './Login.scss';

const {FIELD_REQUIRED, EMAIL_INVALID} = VALIDATE_MESSAGES;

const Login: FC = () => {
  const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm<FormValues>({mode: 'onChange'});
  const {loading, error} = useAppSelector(authSelector);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = watch(v => v);
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<FormValues> = (data: { email: string }) => {
    const newData: LoginType = {
      email: data.email,
      languageID: '1',
    }
    if (error) {
     dispatch(clearError())
    }

    dispatch(signIn(newData))
      .unwrap()
      .then(({status}) => {
        if (status === 'done') {
          navigate('/auth/code');
        }
      })
  }

  return (
    <div className='login'>
      <form className='login-inner' onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        {(errors.email || error) && <Error message={error ? error : errors.email?.message}/>}
        <label>
          Enter your email
          <input
            type='text'
            {...register('email', {
              required: FIELD_REQUIRED,
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: EMAIL_INVALID
              }
            })}
          />
        </label>
        <div className='login-inner__btn'>
          <Button children='SEND CODE' disabled={!isValid || loading}/>
        </div>
      </form>
    </div>
  );
};

export default Login;
