export default function sortby(sortCards) {
	const dropdown = document.createElement("select");
	const sortOptions = ["Default", "Price: low to high", "Price: high to low", "Name"];

	sortOptions.forEach((sortOption) => {
		const option = document.createElement("option");
		option.value = sortOption;
		option.textContent = sortOption;
		dropdown.appendChild(option);
	});

	dropdown.addEventListener("change", () => {
		if (sortCards) sortCards(dropdown.value);
	});

	return dropdown;
}
