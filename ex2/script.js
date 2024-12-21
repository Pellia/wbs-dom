// ----- HEADER -----
// header
const header = document.createElement("header");
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0";

// nav
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";

// logo
const logo = document.createElement("a");
logo.className = "logo";
logo.textContent = "Coffee Shop";
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "None";

// nav-list
const navList = document.createElement("ul");
navList.className = "nav-list";
navList.style.display = "flex";
navList.style.listStyle = "None";

// nav-item
const navArr = ["Home", "Menu", "About", "Contact"];
navArr.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "nav-item";
    listItem.textContent = item;
    navList.appendChild(listItem);
    listItem.style.marginLeft = "1.5rem";
    listItem.style.textDecoration = "none";
    listItem.style.color = "#333";
    listItem.style.fontWeight = "bold";
});

// Append Header
document.body.appendChild(header);
header.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(navList);

// ----- HERO -----
// hero
const hero = document.createElement("section");
hero.className = "hero";
hero.style.height = "550px";
hero.style.background = 'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover';
hero.style.color = "#fff";

// hero-content
const heroContent = document.createElement("div");
heroContent.className = "hero-content";
heroContent.style.maxWidth = "600px";
heroContent.style.display = "flex";
heroContent.style.height = "100%";
heroContent.style.flexDirection = "column";
heroContent.style.justifyContent = "space-around";
heroContent.style.alignItems = "center";
heroContent.style.textAlign = "center";

// h1
const h1Hero = document.createElement("h1");
h1Hero.textContent = "Welcome to Our Coffe Shop";
h1Hero.style.fontSize = "2.5rem";
h1Hero.style.marginBottom = "1rem";

// p
const paraHero = document.createElement("p");
paraHero.textContent = "Enjoy the best coffee in town.";
paraHero.style.fontSize = "1.2rem";
paraHero.style.marginBottom = "2rem";

// a
const aHero = document.createElement("a");
aHero.className = "btn";
aHero.textContent = "Explore Our Menu";
aHero.style.backgroundColor = "#333";
aHero.style.color = "#fff";
aHero.style.padding = "0.75rem 1.5rem";
aHero.style.textDecoration = "none";
aHero.style.borderRadius = "5px";
aHero.style.transition = "background-color 0.3s ease";

aHero.addEventListener("mouseover", () => {
    aHero.style.backgroundColor = "#555";
});

aHero.addEventListener("mouseout", () => {
    aHero.style.backgroundColor = "#333";
});

// Append Hero
document.body.appendChild(hero);
hero.appendChild(heroContent);
heroContent.appendChild(h1Hero);
heroContent.appendChild(paraHero);
heroContent.appendChild(aHero);

// ----- FOOTER -----
const footer = document.createElement("footer");
footer.className = "footer";
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";

const paraFooter = document.createElement("p");
paraFooter.textContent = "© 2024 Coffee Shop. All rights reserved.";

// Append Footer
document.body.appendChild(footer);
footer.appendChild(paraFooter);
