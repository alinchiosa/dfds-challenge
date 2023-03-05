import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";
import Colors from "../constants/colors";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  const Input = styled.input`
    width: fill-available;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid ${Colors.DarkBlue};
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      outline: none;
      border-color: ${Colors.LightBlue};
      box-shadow: 0 0 0 0.1rem ${Colors.LightBlue};
    }
  `;

  const Label = styled.label`
    display: block;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${Colors.DarkBlue};
  `;

  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  `;

  if (label) {
    return (
      <InputContainer>
        <Label>{label}</Label>
        <Input {...props} />
      </InputContainer>
    );
  }

  return <Input {...props} />;
};

export default CustomInput;
