import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Lable = styled("div")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
  marginTop: "10px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "#35393f",
  color: "#dcddde",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
});
export const InputWithLable = (props) => {
  const { value, setValue, lable, type, placeholder } = props;
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Wrapper>
      <Lable>{lable}</Lable>

      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};
