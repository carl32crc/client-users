
import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';

import { Toast } from '../../../components/Toast'
import { useSignInForm } from './useSignInForm.hook'
import { signInController } from '../Controllers/SignInController'
import { WrappedForm } from '../../shared/components/WrappedForm'

import './SignIn.css'

export function SignInForm() {
  const history = useHistory();
  const toastRef = useRef(null);
  
  const {
    email,
    error,
    response,
    password,
    validateEmail
  } = useSignInForm()

  const className = [
    validateEmail.validate ? 'signin-active' : 'signin-inactive']
    .filter(Boolean)
    .join(' ')
    
  return (
    <WrappedForm className='container-signin' title='Login'>
      <form>
        {validateEmail && <span className='message'>{validateEmail.message}</span>}
        <input className='email' placeholder='email' type='text' {...email} />
        <input className='pwd' placeholder='password' type='password' {...password} />
      </form>

      <button
        className={className}
        type='button'
        onClick={() => signInController.signIn(toastRef)}
        disabled={
          !validateEmail.validate
        }
      >
        Sign In
      </button>
      
      <button
        onClick={() => history.push('register')}
        className='register'
        type='button'
      >
        Register
      </button>

      <Toast message={error || response.message} ref={toastRef} />
    </WrappedForm>
  )
}