const mango = document.createElement("li");
const mangoText = document.createTextNode("mango");
// 방법 2 - mango.innerText("mango");

mango.appendChild(mangoText);
// <li>mango</li>

const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

const redFruits = document.querySelectorAll(".red");
// 배열로 가져옴
redFruits.forEach((fruit) => {
	fruit.remove();
});

const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue");

const totalList = document.querySelectorAll("li");
const lengthButton = document.querySelector("button.count");
function showLength() {
	alert(`과일 개수는 ${totalList.length}개입니다.`);
}
lengthButton.addEventListener("click", showLength);
