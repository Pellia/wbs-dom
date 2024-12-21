// 1. Select Elements and Log to Console
const header = document.querySelector("h1");
console.log(header);

const list = document.querySelectorAll(".nav-item a");
console.log(list);

const btn = document.querySelector(".btn");
console.log(btn);

// 2. Modifying Styles

// // Header
header.style.color = "#b5651d";
header.style.fontSize = "3rem";

// List
list.forEach((item) => (item.style.color = "#faf0e6"));

// // 3. Add Content
const hero = document.querySelector(".hero-content");
console.log(hero);
const newP = document.createElement("p");
newP.textContent = "Open daily from 7 AM to 9 PM.";
hero.appendChild(newP);
