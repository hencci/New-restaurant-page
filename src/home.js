export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const homeDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Our Restaurant";

    const description = document.createElement("p");
    description.textContent = "Serving the best icecream since 2010";

    import icecream1 from "./images/icecream1.jpg";
    const homeImage = document.createElement("img");
    homeImage.src = icecream1;
    homeImage.alt = "Icecream Image";

    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);
    homeDiv.appendChild(homeImage);
    content.appendChild(homeDiv);
}