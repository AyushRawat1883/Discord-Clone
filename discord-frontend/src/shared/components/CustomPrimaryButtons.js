import React from 'react'
import Button from '@mui/material/Button';
export const CustomPrimaryButtons = ({
    lable , additonalStyles , disabled , onClick
}) => {
  return (
    <Button 
    variant = 'contained'
    sx={{
        bgcolor: '#5865F2',
        color : 'white',
        textTransform : 'none',
        fontSize : '16px',
        fontWeight : 500 ,
        width : '100%',
        height : "40px",
    }}
    style={additonalStyles ? additonalStyles : {}}
    disabled={disabled}
    onClick={onClick}
    >
        {lable}

    </Button>
  )
}
