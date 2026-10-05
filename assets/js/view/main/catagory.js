import { getCategories } from "../../model/dummyjson.js";

export default function catagory(updateCards) {
	const categories = document.createElement("div");

	getCategories()
		.then((items) => {
			items.forEach((category) => {
				const button = document.createElement("button");
				button.type = "button";
				button.textContent = category.name;
				button.addEventListener("click", () => {
					if (updateCards) updateCards(category.slug);
				});
				categories.appendChild(button);
			});

			if (items.length > 0 && updateCards) {
				updateCards(items[0].slug);
			}
		})
		.catch(() => {
			categories.textContent = "Categories could not be loaded.";
		});

	return categories;
}
