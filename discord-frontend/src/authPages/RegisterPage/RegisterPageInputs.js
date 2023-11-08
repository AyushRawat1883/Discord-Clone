import React from 'react'
import { InputWithLable } from '../../shared/components/InputWithLable';

export const RegisterPageInputs = (props) => {
    const {mail , setMail , username , setUsername , password, setPassword } = props ;
  return (
    <>
    <InputWithLable 
        value = {mail}
        setValue = {setMail}
        lable = "Email Address"
        type="text"
        placeholder="Enter a valid email address" 
    />
        <InputWithLable 
        value = {username} 
        setValue = {setUsername}
        lable = "Username"
        type="text"
        placeholder="Enter a username" 
    />
        <InputWithLable 
        value = {password}
        setValue = {setPassword}
        lable = "Email Password"
        type="password"
        placeholder="Enter Password" 
    />
    </>
  )
}
