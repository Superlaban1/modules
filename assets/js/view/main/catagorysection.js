import catagory from "./catagory.js";

export default function catagorysection(updateCards) {
	const section = document.createElement("section");
	section.appendChild(catagory(updateCards));
	return section;
}
