export default function basket(){
    const basketdiv = document.createElement("div")
    basketdiv.className = "shop-basket";
    const basketimg = document.createElement("img")
    basketimg.src = "assets/img/gyattmanden.jpg"
    const baskettxt = document.createElement("p")
    baskettxt.innerText = "0"
    basketdiv.appendChild(basketimg)
    basketdiv.appendChild(baskettxt)
    return basketdiv
}