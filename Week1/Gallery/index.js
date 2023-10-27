import { DESCRIPTIONS } from "./constants/DESCRIPTIONS.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const pageHeight = window.innerHeight;
const topButton = $(".button-top");
const pandaImages = $$(".images-panda img");

//맨 위로 버튼 투명도 조절
document.addEventListener("scroll", () => {
  topButton.style.opacity = window.scrollY / pageHeight;
});

// 상수파일 이용해서 카드 렌더링
DESCRIPTIONS.forEach((item) => {
  const pandaImages = $(".images-panda");

  const { title, content, src, alt } = item;
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("images-panda-wrapper");
  const image = document.createElement("img");

  // 이미지 추가
  image.src = src;
  image.alt = alt;
  imageWrapper.appendChild(image);

  // 설명 추가
  const descriptionWrapper = document.createElement("div");
  descriptionWrapper.classList.add("images-panda__description");
  const imageTitle = document.createElement("p");
  imageTitle.innerText = title;
  const imageDescription = document.createElement("span");
  imageDescription.innerText = content;
  descriptionWrapper.appendChild(imageTitle);
  descriptionWrapper.appendChild(imageDescription);

  imageWrapper.appendChild(descriptionWrapper);

  pandaImages.appendChild(imageWrapper);
});

const pandaCardWrappers = $$(".images-panda-wrapper");
//호버 시 텍스트 보이게 설정
pandaCardWrappers.forEach((pandaCardWrapper) => {
  pandaCardWrapper.addEventListener("mouseover", () => {
    const description = pandaCardWrapper.querySelector(
      ".images-panda__description"
    );
    const cardImage = pandaCardWrapper.querySelector("img");
    description.classList.add("description-appear");
    cardImage.classList.add("description-appear");
  });

  pandaCardWrapper.addEventListener("mouseout", () => {
    const description = pandaCardWrapper.querySelector(
      ".images-panda__description"
    );
    const cardImage = pandaCardWrapper.querySelector("img");
    description.classList.remove("description-appear");
    cardImage.classList.add("description-appear");
  });
});
