import React, {ChangeEvent, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from 'components/common/Button';
import {useAppDispatch, useAppSelector} from 'hook';
import {clearDone} from 'store/auth/authSlice';
import {useNavigate} from 'react-router-dom';
import {authSelector} from 'helpers/reduxSelectors';
import {codeMessage} from 'store/auth/thunks';
import {CodeType, FormMultipleValues} from 'types';
import { ReactComponent as Close } from 'assets/imgs/close.svg';
import './Code.scss';

const Code = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: {errors, isValid, isDirty, dirtyFields}
  } = useForm<FormMultipleValues>({mode: 'onChange'});
  const {status, loading} = useAppSelector(authSelector);
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
      dispatch(clearDone())
    }
  }, [status]);

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.nextSibling) {
      (e.target.nextSibling as HTMLElement)?.focus();
    }
    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
  }

  const onSubmit = (data: {[x: string]: string;}): void => {
    const value = Object.values(data).join('');

    const newData: CodeType = {
      email: 'demo@demo.com',
      code: value,
      languageID: '1',
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
        <p className='code-inner__description'>
          To finalize your verification, please enter the code that has been sent to your email address /
          SMS
        </p>
        <div className='code-inner__fields'>
          <input
            className={`${dirtyFields.firstNum ? 'dirty' : ''} ${errors.firstNum ? 'invalid-value' : ''}`}
            type='number'
            {...register('firstNum', {required: true})}
            onInput={handleFocus}
          />
          <input
            className={`${dirtyFields.secondNum ? 'dirty' : ''} ${errors.secondNum ? 'invalid-value' : ''}`}
            type='number'
            {...register('secondNum', {required: true})}
            onInput={handleFocus}
          />
          <input
            className={`${dirtyFields.thirdNum ? 'dirty' : ''} ${errors.thirdNum ? 'invalid-value' : ''}`}
            type='number'
            {...register('thirdNum', {required: true})}
            onInput={handleFocus}
          />
          <input
            className={`${dirtyFields.fourthNum ? 'dirty' : ''} ${errors.fourthNum ? 'invalid-value' : ''}`}
            type='number'
            {...register('fourthNum', {required: true})}
            onInput={handleFocus}
          />
          <input
            className={`${dirtyFields.fifthNum ? 'dirty' : ''} ${errors.fifthNum ? 'invalid-value' : ''}`}
            type='number'
            {...register('fifthNum', {required: true})}
            onInput={handleFocus}
          />
          <input
            className={`${dirtyFields.sixthNum ? 'dirty' : ''} ${errors.sixthNum ? 'invalid-value' : ''}`}
            type='number'
            {...register('sixthNum', {required: true})}
            onInput={handleFocus}
          />

          {isDirty && <Close onClick={() => reset()} />}

        </div>
        <div className='code-inner__btn'>
          <Button children='SUBMIT' disabled={!isValid || loading}/>
        </div>
      </form>
    </div>
  );
};

export default Code;
