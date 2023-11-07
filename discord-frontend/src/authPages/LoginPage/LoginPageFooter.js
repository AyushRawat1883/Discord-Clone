import React from 'react'
import { CustomPrimaryButtons } from '../../shared/components/CustomPrimaryButtons'
import  RedirectInfo  from '../../shared/components/RedirectInfo'
import {useHistory } from "react-router-dom";
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = ()=>{
  return 'Enter Corrent E-mail or Password' ;
}
const getFormValidMEssage = () =>{
  return 'please log in !!';
}

const LoginPageFooter = ({handleLogin , isFormValid}) => {
  const history = useHistory();
  const handlePushToRegisterPage = ()=>{
    history.push('/register');
  };


  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMEssage()}
    >
    <div>
      <CustomPrimaryButtons 
        lable = "Login In"
        additonalStyles={{marginTop : '30px'}}
        disabled = {!isFormValid}
        onClick={handleLogin}
      />
    </div>
    </Tooltip>
    <RedirectInfo
      text = "Need an account to login?  "
      redirectText= 'Create a new account'
      additionalStyles={{marginTop : '5px'}}
      redirectHandler={handlePushToRegisterPage}
    />
    </>
  )
}

export default LoginPageFooter ;