export function sortProducts(products, sortOption) {
	const sortedProducts = [...products];

	if (sortOption === "Price: low to high") {
		sortedProducts.sort(sortAscendingPrice);
	} else if (sortOption === "Price: high to low") {
		sortedProducts.sort(sortDescendingPrice);
	}

	return sortedProducts;
}

function sortAscendingPrice(a, b) {
	return a.price - b.price;
}

function sortDescendingPrice(a, b) {
	return b.price - a.price;
}