import { useEffect, useState } from 'react'
import { userController } from '../Controllers/UserController'

const {
  subject 
} = userController
  
function useInputValue(value, key) {
  const onChange = e => userController[key](e.target.value)
      
  return { value, onChange }
}
  
export function useRegisterForm() {
  const [user, setUser] = useState(userController.user)
  const [error, setError] = useState(userController.error)
  const [response, setResponse] = useState(userController.response)
  
  const email = useInputValue(user.email, 'setEmail')
  const firstName = useInputValue(user.firstName, 'setFirstName')
  const lastName = useInputValue(user.lastName, 'setLastName')
  const password = useInputValue(user.password, 'setPassword')
  
  function onUserUpdated(newState) {
    const { email, firstName, lastName, password, validateEmail, validatePassword } = newState.user
    const { error, response } = newState
    console.log({validateEmail, validatePassword})
    setUser({ email, firstName, lastName, password, validateEmail, validatePassword })
    setError(error)
    setResponse(response)
  }
  
  useEffect(() => {
    subject.attach(onUserUpdated)
  
    return () => subject.detach(onUserUpdated)
  },[])
  
  return {
    email,
    error,
    firstName,
    lastName,
    response,
    password,
    validateEmail: user.validateEmail,
    validatePassword: user.validatePassword
  }
}