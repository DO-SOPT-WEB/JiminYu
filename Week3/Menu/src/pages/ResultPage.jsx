import styled from "styled-components";
import React, { useState } from "react";
import ContentTitle from "../common/ContentTitle";
import MENU_ITEMS from "../assets/data/data";

const ResultPage = (resultPageProps) => {
  const { random, categories, setCategories, setRecommendStage } =
    resultPageProps;

  const renderResultPage = () => {
    if (random === false) {
      const selectedResult = MENU_ITEMS.find((item) =>
        item.category.every((option) => categories.includes(option))
      );
      return (
        <>
          <ContentTitle>두구두구 오늘의 메뉴는!?✨</ContentTitle>
          <ContentContainer>
            <Menu src={selectedResult ? selectedResult.img : ""}></Menu>
            <MenuName>{selectedResult ? selectedResult.name : ""}</MenuName>
          </ContentContainer>
          <ReplayBtn
            type="button"
            onClick={() => {
              setCategories([]);
              setRecommendStage(1);
            }}
          >
            다시하기
          </ReplayBtn>
        </>
      );
    } else if (random === true) {
      return <></>;
    }
  };

  return <>{renderResultPage()}</>;
};

export default ResultPage;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 80%;
  height: 100%;
  margin: 2rem;

  border-radius: 1rem;
`;
const Menu = styled.img`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 15rem;
  height: 15rem;
  object-fit: contain;
  margin: 1rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
const MenuName = styled.span`
  width: 12rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 0.1rem ${({ theme }) => theme.colors.pink};
  background-color: ${({ theme }) => theme.colors.yellow};
  ${({ theme }) => theme.fonts.body};
`;

const ReplayBtn = styled.button`
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
