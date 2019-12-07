
import React from 'react'

import { FooterForm } from './FooterForm.component';
import { Input } from '../../shared/components/Input';
import { WrappedForm } from '../../shared/components/WrappedForm'

import { signInController } from '../Controllers/SignInController'

import './SignIn.css'

export function SignInForm() {

    
  return (
    <WrappedForm className='container-signin' title='Login'>
      <form>
        <Input 
          className='email'
          controller={signInController} 
          controllerKey='setEmail' 
          modelKey='email'  
          placeholder='email'
          type='text'
          validatorKey='validateEmail' 
          withValidator
        />
        <Input 
          className='pswd'
          controller={signInController} 
          controllerKey='setPassword' 
          modelKey='password'
          placeholder='password'
          type='password'
        />
      </form>
      <FooterForm />
    </WrappedForm>
  )
}