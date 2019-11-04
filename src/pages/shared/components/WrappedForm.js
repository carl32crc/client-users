import React from 'react'

export const WrappedForm = ({ className, children, title }) => (
  <div className={`container ${className}`}>
    <h2>{title}</h2>
    {children}
  </div>
)