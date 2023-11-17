import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import api from "../libs/api";

import PageLayout from "../common/PageLayout";
import CheckButton from "../components/CheckButton";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isExist, setIsExist] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const navigate = useNavigate();
  // 회원가입 api
  const postSignUp = () => {
    api
      .post(
        `/api/v1/members`,
        {
          "username": `${username}`,
          "password": `${password}`,
          "nickname": `${nickname}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigate(`/login`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMembersCheck = () => {
    api
      .get(`/api/v1/members/check`, {
        params: {
          "username": `${username}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsExist(res.data.isExist);

        if (res.data.isExist){
          setUsername("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    username && nickname && password && isExist == false ? setButtonDisabled(false):setButtonDisabled(true);}
  ,[username, nickname, password, isExist]);

  return (
    <PageLayout headerText={"Sign Up"}>
      <FormWrapper action="" method="get" className="form-example">
        <InputWrapper>
          <Label htmlFor="username">ID </Label>
          <IdCheckWrapper>
            <IdInput
              type="text"
              name="username"
              id="username"
              placeholder="아이디를 입력해주세요."
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <CheckButton
              type="button"
              buttonText={"중복확인"}
              buttonColor={"black"}
              textColor={"white"}
              onClick={getMembersCheck}
              isExist={isExist}
            />
          </IdCheckWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">비밀번호 </Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper className="form-example">
          <Label htmlFor="password-check">비밀번호 확인 </Label>
          <Input
            type="text"
            name="password-check"
            id="password-check"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            required
          />
        </InputWrapper>
        <InputWrapper className="form-example">
          <Label htmlFor="email">닉네임 </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="닉네임을 입력해주세요."
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </InputWrapper>
        <Button
          type="button"
          buttonText={"회원가입"}
          buttonColor={"black"}
          textColor={"white"}
          onClick={postSignUp}
          disabled={buttonDisabled}
        />
      </FormWrapper>
    </PageLayout>
  );
};

export default SignUpPage;

const FormWrapper = styled.div`
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
