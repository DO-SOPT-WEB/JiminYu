import React from "react";
import styled from "styled-components";

const CheckButton = (buttonProps) => {
  const { buttonText, buttonColor, textColor, onClick, isExist } = buttonProps;
  return (
    <CheckButtonWrapper
      buttonColor={buttonColor}
      textColor={textColor}
      onClick={onClick}
      isExist={isExist}
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
  background-color: ${({ theme, isExist }) =>
    isExist === true
      ? theme.colors.red
      : isExist === false
      ? theme.colors.green
      : theme.colors.black};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
`;
