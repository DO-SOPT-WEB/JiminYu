const pageHeight = window.innerHeight;
const topButton = document.querySelector(".button-top");
const pandaImages = document.querySelectorAll(".images-panda img");
const imageDescriptions = document.querySelectorAll(".images-panda img + p");

//투명도 조절
document.addEventListener("scroll", () => {
	topButton.style.opacity = window.scrollY / pageHeight;
});

pandaImages.addEventListener("mouseover", () => {
	imageDescriptions.style.display = "block";
});
