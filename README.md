# 🍨 Ice Cream Restaurant Website

A simple restaurant website built with **JavaScript, Webpack, and CSS**, featuring **tabbed browsing** for different sections like Home, Menu, and Contact.

## Table of Content

* [Featutes](#fearures)
* [Installation & Setup](#installation-&-setup)
* [Project structure](#project-structure)
* [Technologies used](#technologies-used)
* [How it works](#how-it-works)
* [Contributions](#contributions)
* [Contact](#contact)

## 🚀 Features

- **Dynamically Loaded Content** – Uses JavaScript modules to render content dynamically.
- **Tabbed Navigation** – Switch between Home, Menu, and Contact pages without reloading.
- **Webpack Bundling** – Uses Webpack for module bundling and development setup.
- **Responsive Design** – Styled using CSS for a clean and mobile-friendly experience.

## 📸 Preview

![Website Screenshot](./src/images/Icecream%20page.PNG)

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/hencci/New-restaurant-page.git
cd New-restaurant-page

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Run the Development Server

npx webpack serve
Now, open http://localhost:8080/ in your browser to see the project in action. 🚀

## 📂 Project Structure

New-restaurant-page/ <br>
│── dist/&nbsp;&nbsp;&nbsp;                  # Webpack output files <br>
│── src/ <br>
│   ├── images/&nbsp;&nbsp;&nbsp;            # Image assets <br>
│   ├── contact.js&nbsp;&nbsp;&nbsp;         # Contact page module <br>
│   ├── home.js&nbsp;&nbsp;&nbsp;            # Home page module <br>
│   ├── index.js&nbsp;&nbsp;&nbsp;           # Main entry point <br>
│   ├── menu.js&nbsp;&nbsp;&nbsp;            # Menu page module <br>
│   ├── style.css&nbsp;&nbsp;&nbsp;          # Global styles <br>
│   ├── template.html&nbsp;&nbsp;&nbsp;      # HTML template <br>
│── .gitignore&nbsp;&nbsp;&nbsp;             # Ignore dist/ and node_modules/ <br>
│── package.json&nbsp;&nbsp;&nbsp;           # Project dependencies <br>
│── README.md&nbsp;&nbsp;&nbsp;              # Project documentation <br>
│── webpack.config.js&nbsp;&nbsp;&nbsp;      # Webpack configuration <br>

## ✨ Technologies Used

- JavaScript (ES6+)
- Webpack for module bundling
- CSS for styling
- HTML for the base structure

## 🔧 How It Works

- index.js handles navigation and dynamically updates div#content with content from the correct module.
- Each page (home.js, menu.js, contact.js) exports a function that generates its section.
- Webpack compiles all JavaScript files into a single bundle.

## 📜 License

This project is open-source and available under the MIT License.

## 💡 Contributions

Feel free to fork this repository and improve the project! 🚀
PRs are welcome! 😊

## Live preview

https://hencci.github.io/New-restaurant-page

## Contact

Created by [Henry Moses](https://github.com/hencci)
Feel free to reach out if you have any questions
