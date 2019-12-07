import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { userController } from '../Controllers/UserController'

import { Toast } from '../../../components/Toast'

export const FooterForm = () => {
  const history = useHistory();
  const toastRef = useRef(null);

  const [error, setError] = useState(userController.error)
  const [response, setResponse] = useState(userController.response)
  const [validateEmail, setValidateEmail] = useState(userController.user.validateEmail.validate)
  const [validatePassword, setValidatePassword] = useState(userController.user.validatePassword.validate)

  const className = [
    validateEmail &&
    validatePassword ? 'signin-active' : 'signin-inactive']
    .filter(Boolean)
    .join(' ')

  function onUserUpdated(newState) {
    const { error, response } = newState
    const validateEmail = newState.user.validateEmail.validate
    const validatePassword = newState.user.validatePassword.validate
    setValidatePassword(validateEmail)
    setValidateEmail(validatePassword)
    setError(error)
    setResponse(response)
  }

  useEffect(() => {
    userController.subject.attach(onUserUpdated)

    return () => userController.subject.detach(onUserUpdated)
  },[])
    
  return (
    <React.Fragment>
      <button
        className={className}
        type='button'
        onClick={() => userController.createUser(toastRef)}
        disabled={
          !validateEmail ||
          !validatePassword
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
    </React.Fragment>
  )
}