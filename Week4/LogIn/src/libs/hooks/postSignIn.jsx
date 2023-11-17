import React from "react";
import { useState } from "react";
import api from "../api";

const postSignIn = async (navigate, userId, userPassword) => {
  const requestBody = { username: userId, password: userPassword };

  try {
    const { data } = await api.post("/api/v1/members/sign-in", requestBody);
    if (data.data) {
      console.log(data);
      navigate(`/mypage/${data.data.id}`);
    }
  } catch (err) {
    console.log(err);
  }
};

export default postSignIn;
