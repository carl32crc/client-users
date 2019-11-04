
import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';

import { Toast } from '../../../components/Toast'
import { useRegisterForm } from './useRegisterForm.hook'
import { userController } from '../Controllers/UserController'
import { WrappedForm } from '../../shared/components/WrappedForm'

export function RegisterForm() {
  const history = useHistory();
  const toastRef = useRef(null);
  
  const {
    email,
    error,
    firstName,
    lastName,
    response,
    password,
    validateEmail,
    validatePassword
  } = useRegisterForm()

  const className = [
    validateEmail.validate &&
    validatePassword.validate ? 'signin-active' : 'signin-inactive']
    .filter(Boolean)
    .join(' ')

  console.log({email: validateEmail.validate, pwd: validatePassword.validate})
    
  return (
    <WrappedForm className='container-register' title='Register'>
      
      <form>
        {validateEmail && <span className='message'>{validateEmail.message}</span>}
        <input className='email' placeholder='email' type='text' {...email} />
        <input className='firstname' placeholder='first name' type='text' {...firstName} />
        <input className='lastname' placeholder='last name' type='text' {...lastName} />
        {validatePassword && <span className='message'>{validatePassword.message}</span>}
        <input className='pwd' placeholder='password' type='password' {...password} />
      </form>

      <button
        className={className}
        type='button'
        onClick={() => userController.createUser(toastRef)}
        disabled={
          !validateEmail.validate ||
          !validatePassword.validate
        }
      >
        Register
      </button>
      
      <button
        onClick={() => history.push('/')}
        className='register'
        type='button'
      >
        Return to login
      </button>
      <Toast message={error || response.message} ref={toastRef} />
    </WrappedForm>
  )
}