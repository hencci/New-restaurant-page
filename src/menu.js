import vanilla from "./images/vanilla.jpg";
import chocolate from "./images/chocolate.jpg";
import strawberry from "./images/strawberry.jpg";
import cookiesAndCream from "./images/cookies and cream.jpg";
import mintChocolateChips from "./images/mint chocolate chips.jpg";

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
}