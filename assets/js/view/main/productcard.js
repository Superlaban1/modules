export default function productcard(product) {
	const card = document.createElement("div");
	const image = document.createElement("img");
	const name = document.createElement("h2");
	const price = document.createElement("p");

	image.src = product.thumbnail;
	image.alt = product.title;
	name.textContent = product.title;
	price.textContent = `$${product.price}`;

	card.appendChild(image);
	card.appendChild(name);
	card.appendChild(price);

	return card;
}