import React from "react";
import styled from "styled-components";

function NextBtn(btnProps) {
  const { recommendStage, setRecommendStage, isSelected } = btnProps;

  return isSelected ? (
    <NextBtnWrapper
      type="button"
      onClick={() => setRecommendStage(recommendStage + 1)}
    >
      다음으로
    </NextBtnWrapper>
  ) : (
    <NextBtnInactivated>다음으로</NextBtnInactivated>
  );
}

export default NextBtn;

const NextBtnWrapper = styled.button`
  width: 10rem;
  height: 3rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.brown};
  ${({ theme }) => theme.fonts.body};

  &:hover {
    border: solid 0.15rem ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const NextBtnInactivated = styled.div`
  width: 10rem;
  height: 3rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.brown};
  opacity: 70%;
  ${({ theme }) => theme.fonts.body};
`;
