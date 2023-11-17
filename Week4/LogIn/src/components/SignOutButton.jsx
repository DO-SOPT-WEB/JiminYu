import React from "react";
import styled from "styled-components";

const SignOutButton = (buttonProps) => {
  const { buttonText, buttonColor, textColor, onClick } = buttonProps;
  return (
    <SignOutButtonWrapper
      buttonColor={buttonColor}
      textColor={textColor}
      onClick={onClick}
    >
      {buttonText}
    </SignOutButtonWrapper>
  );
};

export default SignOutButton;

const SignOutButtonWrapper = styled.button`
  width: 5rem;
  height: 3rem;

  background-color: ${(props) => props.theme.colors[props.buttonColor]};
  color: ${(props) => props.theme.colors[props.textColor]};
  &:hover {
    cursor: pointer;
  }
`;
