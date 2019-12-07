import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { signInController } from '../Controllers/SignInController'

import { Toast } from '../../../components/Toast'

export const FooterForm = () => {
  const history = useHistory()
  const toastRef = useRef(null)

  const [error, setError] = useState(signInController.error)
  const [response, setResponse] = useState(signInController.response)
  const [validateEmail, setValidateEmail] = useState(signInController.user.validateEmail.validate)

  const className = [
    validateEmail ? 'signin-active' : 'signin-inactive']
    .filter(Boolean)
    .join(' ')

  function onUserUpdated(newState) {
    const { error, response } = newState
    const validateEmail = newState.user.validateEmail.validate
    setValidateEmail(validateEmail)
    setError(error)
    setResponse(response)
  }

  useEffect(() => {
    signInController.subject.attach(onUserUpdated)

    return () => signInController.subject.detach(onUserUpdated)
  },[])
    
  return (
    <React.Fragment>
      <button
        className={className}
        type='button'
        onClick={() => 
          signInController.signIn(toastRef)
        }
        disabled={
          !validateEmail
        }
      >
        Sign In
      </button>
      
      <button
        onClick={() => 
          history.push('register')
        }
        className='register'
        type='button'
      >
        Register
      </button>

      <Toast message={error || response.message} ref={toastRef} />
    </React.Fragment>
  )
}