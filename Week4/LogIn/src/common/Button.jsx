import React from "react";
import styled from "styled-components";

const Button = (buttonProps) => {
  const { buttonText, buttonColor, textColor, onClick } = buttonProps;
  return (
    <ButtonWrapper
      buttonColor={buttonColor}
      textColor={textColor}
      onClick={onClick}
    >
      {buttonText}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  padding: 0.5rem;

  width: 30rem;
  height: 3rem;

  /* border-radius: 0.5rem; */
  border: solid 0.1rem ${({ theme }) => theme.colors.black};
  background-color: ${(props) => props.theme.colors[props.buttonColor]};
  color: ${(props) => props.theme.colors[props.textColor]};
`;
