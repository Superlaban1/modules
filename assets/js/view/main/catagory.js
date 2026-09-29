export default function catagory(updateCards) {
	const dropdown = document.createElement("select");
	const categories = ["All categories", "Beauty", "Fragrances", "Furniture", "Groceries"];

	categories.forEach((category) => {
		const option = document.createElement("option");
		option.value = category === "All categories" ? "all" : category.toLowerCase();
		option.textContent = category;
		dropdown.appendChild(option);
	});

	dropdown.addEventListener("change", () => {
		if (updateCards) updateCards(dropdown.value);
	});

	return dropdown;
}
