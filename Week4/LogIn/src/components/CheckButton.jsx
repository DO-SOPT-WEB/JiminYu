import React from "react";
import styled from "styled-components";

const CheckButton = (buttonProps) => {
  const { buttonText, buttonColor, textColor, onClick } = buttonProps;
  return (
    <CheckButtonWrapper
      buttonColor={buttonColor}
      textColor={textColor}
      onClick={onClick}
    >
      {buttonText}
    </CheckButtonWrapper>
  );
};

export default CheckButton;

const CheckButtonWrapper = styled.button`
  padding: 0.5rem;

  width: 5rem;
  height: 3rem;

  /* border-radius: 0.5rem; */
  border: solid 0.1rem ${({ theme }) => theme.colors.black};
  background-color: ${(props) => props.theme.colors[props.buttonColor]};
  color: ${(props) => props.theme.colors[props.textColor]};
`;
