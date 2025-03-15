import vanilla from "./images/vanilla.jpg";
import chocolate from "./images/chocolate.jpg";
import strawberry from "./images/strawberry.jpg";
import cookiesAndCream from "./images/cookies and cream.jpg";
import mintChocolateChips from "./images/mint chocolate chip.jpg";

export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuDiv = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const menuListDiv = document.createElement("div");
    menuListDiv.classList.add("menuList");//Add class

    const itemDiv1 = document.createElement("div");
    itemDiv1.classList.add("item");
    itemImage1 = document.createElement("img");
    itemImage1.src = vanilla;
    itemImage1.alt = "Vanilla icecream";
    itemText1 = document.createElement("p");
    itemText1.textContent = "vanilla - $5";

    itemDiv1.appendChild(itemImage1);
    itemDiv1.appendChild(itemText1);
    menuListDiv.appendChild(itemDiv1);

    menuDiv.appendChild(title);
    menuDiv.appendChild(menuListDiv);
    content.appendChild(menuDiv);
}