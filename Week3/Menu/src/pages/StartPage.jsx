import styled from "styled-components";
import React from "react";
import PageLayout from "../Common/PageLayout";
import ContentTitle from "../common/ContentTitle";

const StartPage = () => {
  return (
    <PageLayout>
      <ContentWrapper>
        <ContentTitle>어떻게 추천해줄까?!</ContentTitle>
        <OptionWrapper>
          <OptionBox>취향대로 추천</OptionBox>
          <OptionBox>랜덤 추천</OptionBox>
        </OptionWrapper>
      </ContentWrapper>
    </PageLayout>
  );
};

export default StartPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: 1rem;
  ${({ theme }) => theme.fonts.subtitle};
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80%;
  height: 100%;

  column-gap: 1rem;
`;

const OptionBox = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 25rem;

  border-radius: 1rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.brown};
  ${({ theme }) => theme.fonts.subtitle};
  background-color: ${({ theme }) => theme.colors.yellow};
`;
