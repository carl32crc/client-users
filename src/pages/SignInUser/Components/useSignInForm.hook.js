import { useEffect, useState } from 'react'
import { signInController } from '../Controllers/SignInController'

const {
  subject 
} = signInController
  
function useInputValue(value, key) {
  const onChange = e => signInController[key](e.target.value)
      
  return { value, onChange }
}
  
export function useSignInForm() {
  const [user, setUser] = useState(signInController.user)
  const [error, setError] = useState(signInController.error)
  const [response, setResponse] = useState(signInController.response)
  
  const email = useInputValue(user.email, 'setEmail')
  const password = useInputValue(user.password, 'setPassword')
  
  function onUserUpdated(newState) {
    const { email, password, validateEmail } = newState.user
    const { error, response } = newState
    setUser({ email, password, validateEmail })
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
    response,
    password,
    validateEmail: user.validateEmail
  }
}