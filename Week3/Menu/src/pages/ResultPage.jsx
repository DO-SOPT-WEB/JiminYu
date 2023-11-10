import styled from "styled-components";
import { useState, useEffect } from "react";
import ContentTitle from "../common/ContentTitle";
import MENU_ITEMS from "../assets/data/data";

const ResultPage = (resultPageProps) => {
  const { random, categories, setCategories, setRecommendStage } =
    resultPageProps;
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (random && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [random, countdown]);

  const selectedResult = random
    ? MENU_ITEMS[Math.floor(Math.random() * MENU_ITEMS.length)]
    : MENU_ITEMS.find((item) =>
        item.category.every((option) => categories.includes(option))
      );

  return (
    <>
      {random && countdown > 0 ? (
        <CountWrapper>{countdown}</CountWrapper>
      ) : null}
      {!random || countdown === 0 ? (
        <>
          <ContentTitle>두근두근 오늘의 메뉴는!?✨</ContentTitle>
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
      ) : null}
    </>
  );
};

export default ResultPage;

const CountWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.pink};
`;

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
