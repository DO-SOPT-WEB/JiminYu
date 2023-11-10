import React from "react";
import styled from "styled-components";

const ContentTitle = (props) => {
  return <ContentTitleWrapper>{props.children}</ContentTitleWrapper>;
};

export default ContentTitle;

const ContentTitleWrapper = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50rem;
  height: 4rem;

  border-radius: 1rem;
  ${({ theme }) => theme.fonts.subtitle};
  background-color: ${({ theme }) => theme.colors.yellow};
`;
