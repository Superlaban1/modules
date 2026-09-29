import infoaddress from "./infoaddress.js";

export default function footer() {
	const footerelement = document.createElement("footer");
	footerelement.appendChild(infoaddress());
	return footerelement;
}
