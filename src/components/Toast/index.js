import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'

import './_Toast.css'

const Toast = forwardRef(({ message, seconds }, ref) => {

  const [active, setActive] = useState(false)

  const className = [
    'toast', 
    active ? 'toast-active' : 'toast-inactive']
    .filter(Boolean)
    .join(' ')
  
  useImperativeHandle(ref, () =>({
    showToast: () => setActive(true)
  }))
  
  useEffect(() => {
    const timeOut = seconds ?  seconds * 1000 : 5000
    setTimeout(() => {
      setActive(false)
    }, timeOut)
  })

  if (!active) return
  
  return (
    <div className={className} >
      {message}
      <span onClick={() => setActive(false)}>X</span>
    </div> 
  )
})

export { Toast }