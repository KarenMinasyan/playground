import React, {ChangeEvent, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from 'components/common/Button';
import Error from 'components/Error';
import {useAppDispatch, useAppSelector} from 'hook';
import {clearDone, clearError} from 'store/auth/authSlice';
import {useNavigate} from 'react-router-dom';
import {authSelector} from 'helpers/reduxSelectors';
import {MESSAGE_FIELDS} from 'helpers/constants';
import {codeMessage} from 'store/auth/thunks';
import {CodeType} from 'types';
import { ReactComponent as Close } from 'assets/imgs/close.svg';
import './Code.scss';

const Code = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: {errors, isValid, isDirty, dirtyFields}
  } = useForm({mode: 'onChange'});
  const {status, loading, error, email} = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus('firstNum');
  }, []);


  useEffect(() => {
    if (!status) {
      navigate('/auth/login');
    }

    return () => {
      dispatch(clearDone());
      dispatch(clearError());
    }
  }, [status]);

  const clearCodeHandler = () => {
    reset();
    setFocus('firstNum');
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.nextSibling) {
      (e.target.nextSibling as HTMLElement)?.focus();
    }
    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
  }

  const onSubmit = (data: {[x: string]: string;}): void => {
    const value = Object.values(data).join('');

    const newData: CodeType = {
      email,
      code: value,
      languageID: '1',
    }

    if (error) {
      dispatch(clearError())
    }

    dispatch(codeMessage(newData))
      .unwrap()
      .then(() => navigate('../../'))
      .catch(e => console.log(e));
  }

  return (
    <div className='code'>
      <form className='code-inner' onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        {error && <Error message={error}/>}
        <p className='code-inner__description'>
          To finalize your verification, please enter the code that has been sent to your email address /
          SMS
        </p>
        <div className='code-inner__fields'>
          {
            MESSAGE_FIELDS.map(item => (
              <input
                key={item}
                className={`${dirtyFields[item] ? 'dirty' : ''} ${errors[item] ? 'invalid-value' : ''}`}
                type='number'
                {...register(item, {required: true})}
                onInput={handleFocus}
              />
            ))
          }

          {isDirty && <Close onClick={clearCodeHandler} />}

        </div>
        <div className='code-inner__btn'>
          <Button children='SUBMIT' disabled={!isValid || loading}/>
        </div>
      </form>
    </div>
  );
};

export default Code;
