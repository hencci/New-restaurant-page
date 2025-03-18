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
    const itemImage1 = document.createElement("img");
    itemImage1.src = vanilla;
    itemImage1.alt = "Vanilla icecream";
    const itemText1 = document.createElement("p");
    itemText1.textContent = "vanilla - $5";

    const itemDiv2 = document.createElement("div");
    itemDiv2.classList.add("item");
    const itemImage2 = document.createElement("img");
    itemImage2.src = chocolate;
    itemImage2.alt = "Chocolate icecream";
    const itemText2 = document.createElement("p");
    itemText2.textContent = "chocolate - $7";

    const itemDiv3 = document.createElement("div");
    itemDiv3.classList.add("item");
    const itemImage3 = document.createElement("img");
    itemImage3.src = strawberry;
    itemImage3.alt = "Strawberry icecream";
    const itemText3 = document.createElement("p");
    itemText3.textContent = "strawberry - $7";

    const itemDiv4 = document.createElement("div");
    itemDiv4.classList.add("item");
    const itemImage4 = document.createElement("img");
    itemImage4.src = cookiesAndCream;
    itemImage4.alt = "Cookies and Cream";
    const itemText4 = document.createElement("p");
    itemText4.textContent = "cookies and cream - $6";

    const itemDiv5 = document.createElement("div");
    itemDiv5.classList.add("item");
    const itemImage5 = document.createElement("img");
    itemImage5.src = mintChocolateChips;
    itemImage5.alt = "Mint Chocolate Chips";
    const itemText5 = document.createElement("p");
    itemText5.textContent = "mint chocolate chips - $6";

    itemDiv1.appendChild(itemImage1);
    itemDiv1.appendChild(itemText1);
    itemDiv2.appendChild(itemImage2);
    itemDiv2.appendChild(itemText2);
    itemDiv3.appendChild(itemImage3);
    itemDiv3.appendChild(itemText3);
    itemDiv4.appendChild(itemImage4);
    itemDiv4.appendChild(itemText4);
    itemDiv5.appendChild(itemImage5);
    itemDiv5.appendChild(itemText5);

    menuListDiv.appendChild(itemDiv1);
    menuListDiv.appendChild(itemDiv2);
    menuListDiv.appendChild(itemDiv3);
    menuListDiv.appendChild(itemDiv4);
    menuListDiv.appendChild(itemDiv5);

    menuDiv.appendChild(title);
    menuDiv.appendChild(menuListDiv);
    content.appendChild(menuDiv);
}