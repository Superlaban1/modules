import sortby from "./sortby.js";

export default function sortbydiv(sortCards) {
	const div = document.createElement("div");
	div.appendChild(sortby(sortCards));
	return div;
}
