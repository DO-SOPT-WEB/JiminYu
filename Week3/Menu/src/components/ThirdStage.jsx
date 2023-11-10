import styled from "styled-components";
import React, { useState } from "react";
import ContentTitle from "../common/ContentTitle";
import BackBtn from "../common/BackBtn";
import NextBtn from "../common/NextBtn";

const ThirdStage = (thirdStageProps) => {
  const { categories, setCategories, recommendStage, setRecommendStage } =
    thirdStageProps;
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: "해산물", value: "seafood" },
    { id: 2, label: "고기", value: "meat" },
    { id: 3, label: "비건", value: "vegan" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setCategories([...categories, value]);
  };

  const renderSecondStage = () => {
    return (
      <>
        <ContentTitle>셋 중에서 골라봐!</ContentTitle>
        <OptionWrapper>
          {options.map((option) => (
            <OptionBox
              key={option.id}
              onClick={() => handleOptionClick(option.value)}
              isSelected={selectedOption === option.value}
            >
              {option.label}
            </OptionBox>
          ))}
        </OptionWrapper>
        <BtnWrapper>
          <BackBtn
            recommendStage={recommendStage}
            setRecommendStage={setRecommendStage}
          />
          <NextBtn
            recommendStage={recommendStage}
            setRecommendStage={setRecommendStage}
            isSelected={selectedOption ? true : false}
          />
        </BtnWrapper>
      </>
    );
  };

  return <>{renderSecondStage()}</>;
};

export default ThirdStage;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80%;
  height: 100%;
  margin-top: 2rem;

  column-gap: 1rem;
`;

const OptionBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15rem;
  height: 15rem;

  border-radius: 1rem;
  border: solid 0.15rem ${({ theme }) => theme.colors.gray};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.pink : theme.colors.gray};
  ${({ theme }) => theme.fonts.subtitle};
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    border: solid 0.15rem ${({ theme }) => theme.colors.pink};
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;

  column-gap: 3rem;
`;
