import React from "react";
import styled from "styled-components";

const PageLayout = (pageProps) => {
  const { headerText, children } = pageProps;
  return (
    <PageLayoutWrapper>
      <PageSection>
        <PageHeader>
          <h2>{headerText}</h2>
        </PageHeader>
        {children}
      </PageSection>
    </PageLayoutWrapper>
  );
};

export default PageLayout;

const PageLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const PageSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 40rem;
  height: 40rem;
  padding: 2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const PageHeader = styled.header`
  margin-bottom: 3rem;

  text-align: center;
  ${({ theme }) => theme.fonts.title};
`;
