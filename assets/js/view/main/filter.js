export default function filter(filterCards) {
	const filters = document.createElement("div");
	const filterNames = ["All", "Under $50", "In stock"];

	filterNames.forEach((filterName) => {
		const button = document.createElement("button");
		button.innerText = filterName;
		button.addEventListener("click", () => {
			if (filterCards) filterCards(filterName);
		});
		filters.appendChild(button);
	});

	return filters;
}
