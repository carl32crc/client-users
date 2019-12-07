
import React from 'react'

import { FooterForm } from './FooterForm.component';
import { Input } from '../../shared/components/Input';
import { WrappedForm } from '../../shared/components/WrappedForm'

import { userController } from '../Controllers/UserController'


export function RegisterForm() {
    
  return (
    <WrappedForm className='container-register' title='Register'>
      
      <form>

        <Input 
          className='email'
          controller={userController} 
          controllerKey='setEmail' 
          modelKey='email'  
          placeholder='email'
          type='text'
          validatorKey='validateEmail' 
          withValidator
        />

        <Input 
          className='firstname'
          controller={userController} 
          controllerKey='setFirstName' 
          modelKey='firstName'
          placeholder='first name'
          type='text'
        />

        <Input 
          className='lastname'
          controller={userController} 
          controllerKey='setLastName' 
          modelKey='lastName'
          placeholder='last name'
          type='text'
        />

        <Input 
          className='password'
          controller={userController} 
          controllerKey='setPassword' 
          modelKey='password'  
          placeholder='password'
          type='password'
          validatorKey='validatePassword' 
          withValidator
        />

      </form>

      <FooterForm />

    </WrappedForm>
  )
}