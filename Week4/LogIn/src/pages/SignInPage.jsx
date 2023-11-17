import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageLayout from "../common/PageLayout";
import Button from "../common/Button";

const SignInPage = () => {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate("/signup");
  };

  return (
    <PageLayout headerText={"Sign In"}>
      <FormWrapper action="" method="get" className="form-example">
        <InputWrapper className="form-example">
          <Label htmlFor="id">ID </Label>
          <Input
            type="text"
            name="id"
            id="id"
            placeholder="아이디를 입력해주세요."
            required
          />
        </InputWrapper>
        <InputWrapper className="form-example">
          <Label htmlFor="password">PASSWORD </Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </InputWrapper>
        <ButtonsWrapper>
          <Button
            type="button"
            buttonText={"로그인"}
            buttonColor={"black"}
            textColor={"white"}
          />
          <Button
            type="button"
            buttonText={"회원가입"}
            buttonColor={"white"}
            textColor={"black"}
            onClick={navigateSignUp}
          />
        </ButtonsWrapper>
      </FormWrapper>
    </PageLayout>
  );
};

export default SignInPage;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 30rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

const Label = styled.label`
  align-self: center;

  ${({ theme }) => theme.fonts.body};
`;

const Input = styled.input`
  width: 20rem;
  padding: 0.5rem;
`;
