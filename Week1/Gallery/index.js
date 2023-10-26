const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const pageHeight = window.innerHeight;
const topButton = $(".button-top");
const pandaImages = $$(".images-panda img");
const pandaCardWrappers = $$(".images-panda-wrapper");

//맨 위로 버튼 투명도 조절
document.addEventListener("scroll", () => {
	topButton.style.opacity = window.scrollY / pageHeight;
});

//호버 시 텍스트 보이게 설정
pandaCardWrappers.forEach((pandaCardWrapper) => {
	pandaCardWrapper.addEventListener("mouseover", () => {
		const description = pandaCardWrapper.querySelector(
			".images-panda__description"
		);
		description.classList.add("description-appear");
	});

	pandaCardWrapper.addEventListener("mouseout", () => {
		const description = pandaCardWrapper.querySelector(
			".images-panda__description"
		);
		description.classList.remove("description-appear");
	});
});
