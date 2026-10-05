import header from "./view/header/header.js";
import catagorysection from "./view/main/catagorysection.js";
//import filtersection from "./view/main/filtersection.js";
//import sortbydiv from "./view/main/sortcomponent.js";
import footer from "./view/footer/footer.js";
import { getProductsByCategory } from "./model/dummyjson.js";
import products from "./view/main/products.js";
//import { sortProducts } from "./view/main/sortby.js";

const app = document.getElementById("appID");
const main = document.createElement("main");
const productContainer = document.createElement("section");
let currentProducts = [];
let sortOption = "Default";

/*const renderProducts = () => {
	productContainer.replaceChildren(products(sortProducts(currentProducts, sortOption)));
};*/

const updateCards = async (categorySlug) => {
	try {
		currentProducts = await getProductsByCategory(categorySlug);
		
		products(currentProducts, productContainer);
	} catch {
		productContainer.textContent = "Products could not be loaded.";
	}
};

main.appendChild(catagorysection(updateCards));
//main.appendChild(filtersection());
/*main.appendChild(sortbydiv((selectedOption) => {
	sortOption = selectedOption;
	renderProducts();
}));*/

main.appendChild(productContainer);

app.appendChild(header());
app.appendChild(main);
app.appendChild(footer());