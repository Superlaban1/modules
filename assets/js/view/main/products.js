import productcard from "./productcard.js";

export default function products(productData) {
	const productList = document.createElement("div");

	productData.forEach((product) => {
		productList.appendChild(productcard(product));
	});

	return productList;
}