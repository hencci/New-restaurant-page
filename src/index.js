import loadHome from "./home";
import loadMenu from "./menu";

function addNavEventListeners() {
    document.getElementById("home-btn").addEventListener("click", loadHome);
    document.getElementById("menu-btn").addEventListener("click", loadMenu);
}

function initWebsite() {
    loadHome();
    addNavEventListeners(); //Call function
}

initWebsite();