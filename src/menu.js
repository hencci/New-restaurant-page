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