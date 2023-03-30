document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".nav");

	burger.addEventListener("click", function () {
		burger.classList.toggle("burger_active");
		menu.style.display = "block";
	});
});
