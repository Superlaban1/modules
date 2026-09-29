export async function getCategories() {
	const response = await fetch("https://dummyjson.com/products/categories");
	if (!response.ok) {
		throw new Error("Failed to load product categories");
	}

	const categories = await response.json();
	return categories.map((category) => {
		if (typeof category === "string") {
			return { slug: category, name: category };
		}

		return {
			slug: category.slug ?? category.name,
			name: category.name ?? category.slug,
		};
	});
}

export async function getProductsByCategory(categorySlug) {
	const response = await fetch(`https://dummyjson.com/products/category/${categorySlug}`);
	if (!response.ok) {
		throw new Error("Failed to load products");
	}

	const data = await response.json();
	return data.products;
}