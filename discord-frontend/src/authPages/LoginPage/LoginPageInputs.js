import React from 'react'
import { InputWithLable } from '../../shared/components/InputWithLable'
const LoginPageInputs = ({mail ,setMail , password , setPassword})=> {
  return (
    <>
    <InputWithLable
    value={mail}
    setValue = {setMail}
    lable='E-mail'
    type='text'
    placeholder='Enter E-mail Address'
    />

    <InputWithLable
    value={password}
    setValue = {setPassword}
    lable='Password'
    type='password'
    placeholder='Enter Password'
    />
    </>
  )
}

export default LoginPageInputs