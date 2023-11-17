import React from "react";
import styled from "styled-components";

import PageLayout from "../common/PageLayout";
import CheckButton from "../components/CheckButton";
import Button from "../common/Button";

const SignUpPage = () => {
  // 중복 확인 api 통신하는 훅
  // 통신 결과에 맞게 버튼 색깔 바꿔주는 훅
  // 폼 다 채우면 버튼 활성화 되도록 하는 훅
  return (
    <PageLayout headerText={"Sign Up"}>
      <FormWrapper action="" method="get" className="form-example">
        <InputWrapper>
          <Label htmlFor="name">ID </Label>
          <IdCheckWrapper>
            <IdInput
              type="text"
              name="name"
              id="name"
              placeholder="아이디를 입력해주세요."
              required
            />
            <CheckButton
              type="button"
              buttonText={"중복확인"}
              buttonColor={"black"}
              textColor={"white"}
            />
          </IdCheckWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">비밀번호 </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </InputWrapper>
        <InputWrapper className="form-example">
          <Label for="email">비밀번호 확인 </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            required
          />
        </InputWrapper>
        <InputWrapper className="form-example">
          <Label for="email">닉네임 </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="닉네임을 입력해주세요."
            required
          />
        </InputWrapper>
        <Button
          type="button"
          buttonText={"회원가입"}
          buttonColor={"black"}
          textColor={"white"}
          disabled
        />
      </FormWrapper>
    </PageLayout>
  );
};

export default SignUpPage;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 30rem;
`;

const IdCheckWrapper = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  align-self: center;

  ${({ theme }) => theme.fonts.body};
`;

const IdInput = styled.input`
  width: 14rem;
  padding: 0.5rem;
`;

const Input = styled.input`
  width: 20rem;
  padding: 0.5rem;
`;
