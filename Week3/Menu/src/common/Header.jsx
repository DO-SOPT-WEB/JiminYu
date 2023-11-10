import React from "react";
import styled from "styled-components";

function Header(headerProps) {
  const { recommendStage, setRecommendStage, categories, setCategories } =
    headerProps;

  const handleHomeButtonClick = () => {
    setCategories([]);
    setRecommendStage(0);
  };

  return (
    <HeaderWrapper>
      <h1>🍽️ 오늘 뭐 먹지? 😋</h1>
      {recommendStage === 0 ? null : (
        <HomeBtn type="button" onClick={() => handleHomeButtonClick()}>
          처음으로
        </HomeBtn>
      )}
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem;
  margin-bottom: 4rem;

  background-color: ${({ theme }) => theme.colors.green};

  & > h1 {
    ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const HomeBtn = styled.button`
  padding: 1rem;

  ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  border: solid 0.15rem ${({ theme }) => theme.colors.black};

  &:hover {
    border: solid 0.15rem ${({ theme }) => theme.colors.pink};
    background: ${({ theme }) => theme.colors.yellow};
  }
`;
