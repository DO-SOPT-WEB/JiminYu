import styled from "styled-components";
import React, { useState } from "react";
import PageLayout from "../Common/PageLayout";
import ContentTitle from "../common/ContentTitle";
import FirstStage from "../components/FirstStage";
import SecondStage from "../components/SecondStage";
import ThirdStage from "../components/ThirdStage";
import FourthStage from "../components/\bFourthStage";
import ResultPage from "./ResultPage";

const StartPage = () => {
  const [recommendStage, setRecommendStage] = useState(0);
  const [random, setRandom] = useState(null);
  const [categories, setCategories] = useState([]);

  const renderStage = () => {
    switch (recommendStage) {
      case 0:
        return (
          <>
            <ContentTitle>어떻게 추천해줄까?!</ContentTitle>
            <OptionWrapper>
              <OptionBox
                type="button"
                onClick={() => {
                  setRecommendStage(1);
                  setRandom(false);
                }}
              >
                취향대로 추천
              </OptionBox>
              <OptionBox
                type="button"
                onClick={() => {
                  setRecommendStage(1);
                  setRandom(true);
                }}
              >
                랜덤 추천
              </OptionBox>
            </OptionWrapper>
          </>
        );
      case 1:
        return (
          <FirstStage random={random} setRecommendStage={setRecommendStage} />
        );
      case 2:
        return (
          <SecondStage
            categories={categories}
            setCategories={setCategories}
            recommendStage={recommendStage}
            setRecommendStage={setRecommendStage}
          />
        );
      case 3:
        return (
          <ThirdStage
            categories={categories}
            setCategories={setCategories}
            recommendStage={recommendStage}
            setRecommendStage={setRecommendStage}
          />
        );
      case 4:
        return (
          <FourthStage
            categories={categories}
            setCategories={setCategories}
            recommendStage={recommendStage}
            setRecommendStage={setRecommendStage}
          />
        );
      case 5:
        return (
          <ResultPage
            random={random}
            categories={categories}
            setCategories={setCategories}
            setRecommendStage={setRecommendStage}
          />
        );
    }
  };

  return (
    <PageLayout
      recommendStage={recommendStage}
      setRecommendStage={setRecommendStage}
    >
      <ContentWrapper>{renderStage()}</ContentWrapper>
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

const OptionBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 25rem;

  border-radius: 1rem;
  border: solid 0.15rem ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.subtitle};
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    border: solid 0.15rem ${({ theme }) => theme.colors.pink};
  }
`;
