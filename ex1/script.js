// 1. Select Elements and Log to Console
const header = document.getElementsByTagName("h1");
console.log(header);

const list = document.querySelectorAll(".nav-item");
console.log(list);

const btn = document.getElementsByClassName("btn");
console.log(btn);

// 2. Modifying Styles

// Header
header[0].style.color = "#b5651d";
header[0].style.fontSize = "3rem";

// List
console.log(list[0]);
list[0].style.Color = "red";
list[0].style.backgroundColor = "red";

// 3. Add Content
const hero = document.getElementsByClassName("hero-content");
const newP = document.createElement("p");
newP.textContent = "Open daily from 7 AM to 9 PM.";
hero[0].appendChild(newP);
