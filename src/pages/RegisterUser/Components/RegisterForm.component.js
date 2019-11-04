
import React, { useRef } from 'react'

import { Toast } from '../../../components/Toast'
import { useRegisterForm } from './useRegisterForm.hook'
import { userController } from '../Controllers/UserController'

export function RegisterForm() {
  
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
    
  return (
    <>
      <form>
        <input type='text' {...email} />
        <input type='text' {...firstName} />
        <input type='text' {...lastName} />
        <input type='password' {...password} />
        <button 
          type='button' 
          onClick={() => userController.createUser(toastRef)}
          disabled={
            validateEmail.validate ||
            validatePassword.validate
          }
        >
          Register
        </button>
        {validatePassword && <span>{validatePassword.message}</span>}
        {validateEmail && <span>{validateEmail.message}</span>}
      </form>
      <Toast message={error || response.message} ref={toastRef} />
    </>
  )
}