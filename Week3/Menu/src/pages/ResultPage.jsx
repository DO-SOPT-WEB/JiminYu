import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
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

  const selectedResult = useMemo(() => {
    return random
      ? MENU_ITEMS[Math.floor(Math.random() * MENU_ITEMS.length)]
      : MENU_ITEMS.find((item) =>
          item.category.every((option) => categories.includes(option))
        );
  }, [random, categories]);

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
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: blink-effect 1000ms step-end infinite;
  ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.pink};
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
    0 0 42px ${({ theme }) => theme.colors.pink},
    0 0 82px ${({ theme }) => theme.colors.pink},
    0 0 92px ${({ theme }) => theme.colors.pink},
    0 0 102px ${({ theme }) => theme.colors.pink},
    0 0 151px ${({ theme }) => theme.colors.pink};
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
  width: 15rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 0.2rem ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.white};
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
