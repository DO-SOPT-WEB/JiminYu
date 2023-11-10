import styled from "styled-components";
import React, { useState } from "react";
import ContentTitle from "../common/ContentTitle";

const FirstStage = (firstStageProps) => {
  const { random, setRecommendStage } = firstStageProps;
  const renderFirstStage = () => {
    if (random === false) {
      return (
        <>
          <ContentTitle>어떻게 추천해줄까?!</ContentTitle>
          <OptionContainer>취향대로 추천</OptionContainer>
          <StartBtn
            type="button"
            onClick={() => {
              setRecommendStage(2);
            }}
          >
            시작!
          </StartBtn>
        </>
      );
    } else if (random === true) {
      return (
        <>
          <ContentTitle>어떻게 추천해줄까?!</ContentTitle>
          <OptionContainer>랜덤 추천</OptionContainer>
          <StartBtn
            type="button"
            onClick={() => {
              setRecommendStage(4);
            }}
          >
            시작!
          </StartBtn>
        </>
      );
    }
  };
  return <>{renderFirstStage()}</>;
};

export default FirstStage;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80%;
  height: 100%;
  margin: 2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StartBtn = styled.button`
  text-align: center;

  width: 10rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.yellow};
  ${({ theme }) => theme.fonts.body};
  border-radius: 1rem;
  &:hover {
    border: solid 0.15rem ${({ theme }) => theme.colors.brown};
  }
`;
