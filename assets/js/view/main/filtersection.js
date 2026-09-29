import filter from "./filter.js";

export default function filtersection(filterCards) {
	const section = document.createElement("section");
	section.appendChild(filter(filterCards));
	return section;
}
