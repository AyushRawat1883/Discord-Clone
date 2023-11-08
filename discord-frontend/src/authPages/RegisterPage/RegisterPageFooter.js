import React from 'react'
import { CustomPrimaryButtons } from '../../shared/components/CustomPrimaryButtons'
import  RedirectInfo  from '../../shared/components/RedirectInfo'
import {useHistory } from "react-router-dom";
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = ()=>{
  return 'Chooos another Username or incorrect Email Address' ;
}
const getFormValidMessage = () =>{
  return 'Press to register';
}

const RegisterPageFooter = ({handleRegister , isFormValid}) => {
  const history = useHistory();
  const handlePushToLoginPage = ()=>{
    history.push('/login');
  };


  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
    >
    <div>
      <CustomPrimaryButtons 
        lable = "Register"
        additonalStyles={{marginTop : '30px'}}
        disabled = {!isFormValid}
        onClick={handleRegister}
      />
    </div>
    </Tooltip>
    <RedirectInfo
      text = "Already have an account ?  "
      redirectText= 'Click to Login'
      additionalStyles={{marginTop : '5px'}}
      redirectHandler={handlePushToLoginPage}
    />
    </>
  )
}

export default RegisterPageFooter ;