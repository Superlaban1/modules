export default function infoaddress() {
	const info = document.createElement("div");

	const shopName = document.createElement("p");
	shopName.innerText = "The Shop";

	const email = document.createElement("p");
	email.innerText = "Email: contact@theshop.dk";

	const phone = document.createElement("p");
	phone.innerText = "Phone: +45 12 34 56 78";

	const address = document.createElement("p");
	address.innerText = "Address: Agavevej 2, 9000 Aalborg";

	info.appendChild(shopName);
	info.appendChild(email);
	info.appendChild(phone);
	info.appendChild(address);
	return info;
}
