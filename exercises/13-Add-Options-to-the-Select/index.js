window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let select = document.querySelector("#mySelect");

	// your code here
	let i = 0;
	while (i <= 6) {
        
		select.innerHTML += `<option value="${countries[i]}">${countries[i]}</option>`;
		i++;
	}

	select.addEventListener("change", () => {
		alert(select.value);
	});
};
