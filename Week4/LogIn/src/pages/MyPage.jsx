import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import api from "../libs/api";
import PageLayout from "../common/PageLayout";
import SignOutButton from "../components/SignOutButton";
import User from "../assets/user.png";

const MyPage = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const { userId } = useParams();

  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate("/login");
  };

  const getProfile = () => {
    api
      .get(`/api/v1/members/${userId}`, {
        params: {
          memberId: `${username}`,
        },
      })
      .then((res) => {
        setNickname(res.data.nickname);
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <PageLayout headerText={"MY PAGE"}>
      <ProfileWrapper>
        <ProfileImg src={User} />
        <ProfileBox>ID : {username}</ProfileBox>
        <ProfileBox>닉네임 : {nickname}</ProfileBox>
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
