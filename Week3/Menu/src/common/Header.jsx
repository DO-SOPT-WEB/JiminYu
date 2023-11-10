import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <h1>🍽️ 오늘 뭐 먹지? 😋</h1>
      <button type="button">처음으로</button>
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
  & > button {
    padding: 1rem;

    ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
  }
`;
