import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PageLayout from "../common/PageLayout";
import SignOutButton from "../components/SignOutButton";
import User from "../assets/user.png";

const MyPage = () => {
  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate("/login");
  };

  return (
    <PageLayout headerText={"MY PAGE"}>
      <ProfileWrapper>
        <ProfileImg src={User} />
        <ProfileBox>ID : </ProfileBox>
        <ProfileBox>닉네임 : </ProfileBox>
      </ProfileWrapper>
      <SignOutButton
        type="button"
        buttonText={"로그아웃"}
        buttonColor={"gray"}
        textColor={"black"}
        onClick={navigateSignIn}
      />
    </PageLayout>
  );
};

export default MyPage;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 1rem;

  width: 30rem;
  margin-bottom: 1rem;
`;
const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
`;
const ProfileBox = styled.div`
  width: 20rem;
  height: 3rem;

  line-height: 3rem;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body};
`;
