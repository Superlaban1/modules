import header from "./view/header/header.js";
import catagorysection from "./view/main/catagorysection.js";
import filtersection from "./view/main/filtersection.js";
import sortbydiv from "./view/main/sortbydiv.js";
import footer from "./view/footer/footer.js";
import { getProductsByCategory } from "./models/dummyjson.js";
import products from "./view/main/products.js";

const app = document.getElementById("appID");
const main = document.createElement("main");
const productContainer = document.createElement("section");

const updateCards = async (categorySlug) => {
	try {
		const productData = await getProductsByCategory(categorySlug);
		productContainer.replaceChildren(products(productData));
	} catch {
		productContainer.textContent = "Products could not be loaded.";
	}
};

main.appendChild(catagorysection(updateCards));
main.appendChild(filtersection());
main.appendChild(sortbydiv());
main.appendChild(productContainer);

app.appendChild(header());
app.appendChild(main);
app.appendChild(footer());