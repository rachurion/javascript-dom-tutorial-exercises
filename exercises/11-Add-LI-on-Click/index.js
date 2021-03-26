let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	let elem = document.createElement(li);
	elem.innerHTML = "Fourth Element";
	list.appendChild(elem);
});
