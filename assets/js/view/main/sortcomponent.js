import { sortProducts } from "../../controller/sortbycallback.js"

export function rendersortcomponent(mydata) {

	const div = document.createElement("div");

	const dropdown = document.createElement("select");
	const sortOptions = ["Default", "Price: low to high", "Price: high to low"];

	sortOptions.forEach((sortOption) => {
		const option = document.createElement("option");
		option.value = sortOption;
		option.textContent = sortOption;
		dropdown.appendChild(option);
	});

	dropdown.addEventListener("change", () => {
		if (mydata) sortCards(dropdown.value);
	});

	div.appendChild(dropdown)
	return div
}

// TODO: update function
