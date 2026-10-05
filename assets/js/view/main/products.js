import productcard from "./productcard.js";
import { rendersortcomponent } from "./sortcomponent.js"

export default function products(productData, parentelement) {
	console.log(productData)
	const productList = document.createElement("div");
	productList.className = "product-grid";
	productList.appendChild(rendersortcomponent(productData))

	productData.forEach((product) => {
		productList.appendChild(productcard(product));
	});
	parentelement.innerHTML = ""			
	parentelement.appendChild(productList)
}