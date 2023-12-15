import styled from "styled-components";

function BackBtn(btnProps) {
  const { recommendStage, setRecommendStage } = btnProps;
  return (
    <BackBtnWrapper
      type="button"
      onClick={() => setRecommendStage(recommendStage - 1)}
    >
      이전으로
    </BackBtnWrapper>
  );
}

export default BackBtn;

const BackBtnWrapper = styled.button`
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
