import React, { useEffect, useState } from 'react'
import { userController } from './Controllers/UserController';

const {
  subject 
} = userController

function useInputValue(value, key) {
  const onChange = e => userController[key](e.target.value)
    
  return { value, onChange }
}

function RegisterForm() {
  const [user, setUser] = useState(userController.user)
  const [error, setError] = useState(userController.error)
  const [response, setResponse] = useState(userController.response)

  const email = useInputValue(user.email, 'setEmail')
  const firstName = useInputValue(user.firstName, 'setFirstName')
  const lastName = useInputValue(user.lastName, 'setLastName')
  const password = useInputValue(user.password, 'setPassword')

  function onUserUpdated(newState) {
    const { email, firstName, lastName, password } = newState.user
    const { error, response } = newState
    setUser({ firstName, lastName, password, email })
    setError(error)
    setResponse(response)
  }

  useEffect(() => {
    subject.attach(onUserUpdated)

    return () => subject.detach(onUserUpdated)
  },[])

  return (
  <>
    <input type='text' {...email} />
    <input type='text' {...firstName} />
    <input type='text' {...lastName} />
    <input type='password' {...password} />
    <button onClick={() => userController.createUser()}>Register</button>
    {error && <span>{error}</span>}
    {response && response.data.message && <span>{response.data.message}</span>}
    {response && !response.data.message && <span>{response.message}</span>}
  </>
  )
}

export function RegisterUser() {
    return <RegisterForm />
}