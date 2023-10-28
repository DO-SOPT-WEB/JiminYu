import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <Container>
      <p>{number}</p>
      <ButtonContainer>
        <CalcButton type="button" onClick={increaseNumber}>
          +1
        </CalcButton>
        <CalcButton type="button" onClick={decreaseNumber}>
          -1
        </CalcButton>
      </ButtonContainer>
    </Container>
  );
};

export default Counter;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const CalcButton = styled.button`
  background-color: pink;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
