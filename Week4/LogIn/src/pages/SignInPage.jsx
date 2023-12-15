import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import api from "../libs/api";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import PageLayout from "../common/PageLayout";
import Button from "../common/Button";

const SignInPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [toasts, setToasts] = useState("");

  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate("/signup");
  };

  const postSignIn = () => {
    api
      .post(
        `/api/v1/members/sign-in`,
        {
          username: `${id}`,
          password: `${password}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigate(`/mypage/${res.data.id}`);
      })
      .catch((err) => {
        console.log("err.data", err);
        setToasts(err.response.data.message);
      });
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts("");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [toasts]);

  return (
    <PageLayout headerText={"Sign In"}>
      <FormWrapper action="" method="get" className="form-example">
        <InputWrapper className="form-example">
          <Label htmlFor="username">ID </Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={(e) => setId(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper className="form-example">
          <Label htmlFor="password">PASSWORD </Label>
          <Input
            type="text"
            id="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        <ButtonsWrapper>
          <Button
            type="button"
            buttonText={"로그인"}
            buttonColor={"black"}
            textColor={"white"}
            onClick={postSignIn}
          />
          <Button
            type="button"
            buttonText={"회원가입"}
            buttonColor={"white"}
            textColor={"black"}
            onClick={navigateSignUp}
          />
        </ButtonsWrapper>
        {toasts &&
          createPortal(<ModalContent>{toasts}</ModalContent>, document.body)}
      </FormWrapper>
    </PageLayout>
  );
};

export default SignInPage;

const FormWrapper = styled.div`
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

const ModalContent = styled.div`
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem;
  width: fit-content;

  z-index: 9999;
  border-radius: 1rem;
  background-color: black;

  color: white;
  text-align: center;
  font-size: 1.5rem;
`;
