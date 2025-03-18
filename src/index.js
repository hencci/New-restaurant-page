import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function addNavEventListeners() {
    document.getElementById("home-btn").addEventListener("click", loadHome);
    document.getElementById("menu-btn").addEventListener("click", loadMenu);
    document.getElementById("contact-btn").addEventListener("click", loadContact);
}

function initWebsite() {
    loadHome();
    addNavEventListeners(); //Call function
}

initWebsite();