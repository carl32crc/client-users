
import React, { useRef } from 'react'

import { Toast } from '../../../components/Toast'
import { useSignInForm } from './useSignInForm.hook'
import { signInController } from '../Controllers/SignInController'

export function SignInForm() {
  
  const toastRef = useRef(null);
  
  const {
    email,
    error,
    response,
    password,
    validateEmail
  } = useSignInForm()
    
  return (
    <>
      <form>
        <input type='text' {...email} />
        <input type='password' {...password} />
        <button 
          type='button' 
          onClick={() => signInController.signIn(toastRef)}
          disabled={
            validateEmail.validate
          }
        >
          Sign In
        </button>
        {validateEmail && <span>{validateEmail.message}</span>}
      </form>
      <Toast message={error || response.message} ref={toastRef} />
    </>
  )
}