import styled from "styled-components";
import React from "react";
import Header from "./Header";

const PageLayout = (props) => {
  const { children } = props;
  return (
    <StyledPageWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </StyledPageWrapper>
  );
};

export default PageLayout;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.section`
  width: 85vw;
  height: 70vh;

  display: flex;
  justify-content: center;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.green};
`;
