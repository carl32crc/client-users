import React, { useEffect, useState } from 'react'

function useInputValue(controller, key, value) {
  const onChange = e => controller[key](e.target.value)
        
  return { value, onChange }
}

export const Input = ({ 
  className, 
  controller, 
  controllerKey, 
  modelKey, 
  placeholder, 
  type, 
  validatorKey = 'empty'
}) => {

  const [value, setValue] = useState(controller.user[modelKey])
    
  const inputValue = useInputValue(controller, controllerKey, value)

  function onUserUpdated(newState) {
    const value = newState.user[modelKey]
    setValue(value)
  }
  
  useEffect(() => {
    controller.subject.attach(onUserUpdated)
  
    return () => controller.subject.detach(onUserUpdated)
  },[])

  return (
    <React.Fragment>
      {validatorKey && controller.user[validatorKey] && controller.user[validatorKey].message &&
        <span className='message'>{controller.user[validatorKey].message}</span>
      }
      <input className={className} placeholder={placeholder} type={type} {...inputValue} />
    </React.Fragment>
  )
}