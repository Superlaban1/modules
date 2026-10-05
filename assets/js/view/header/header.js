import logo from "./logo.js";
import name from "./name.js";
import basket from "./basket.js";
export default function header(){
	const headerelement = document.createElement("header")
	headerelement.className = "site-header";
	headerelement.appendChild(logo())
	headerelement.appendChild(name())
	headerelement.appendChild(basket())
	return headerelement
}