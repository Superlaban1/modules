import header from "./view/header/header.js";
import catagorysection from "./view/main/catagorysection.js";
import filtersection from "./view/main/filtersection.js";
import sortbydiv from "./view/main/sortbydiv.js";
import footer from "./view/footer/footer.js";

const app = document.getElementById("appID");
const main = document.createElement("main");

main.appendChild(catagorysection());
main.appendChild(filtersection());
main.appendChild(sortbydiv());

app.appendChild(header());
app.appendChild(main);
app.appendChild(footer());