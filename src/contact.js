export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const contactDiv = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "📞 Phone: (123) 456-7890";

    const address = document.createElement("p");
    address.textContent = "📍 Address: 123 Food Street, Flavor Town";

    contactDiv.appendChild(title);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(address);
    content.appendChild(contactDiv);
}
