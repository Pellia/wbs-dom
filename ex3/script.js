// Array of 10 random tasks as strings
const tasks = [
    "Complete the project",
    "Attend the meeting",
    "Write a report",
    "Review the code",
    "Fix the bugs",
    "Update the documentation",
    "Plan the next sprint",
    "Conduct user testing",
    "Optimize the performance",
    "Design",
];

function getRandomTask() {
    return tasks[Math.floor(Math.random(tasks) * tasks.length)];
}

// Add Item - Button
const add = document.getElementById("add-item-btn");

add.addEventListener("click", () => {
    const itemList = document.getElementById("item-list");
    const item = document.createElement("li");
    item.textContent = getRandomTask();
    itemList.appendChild(item);
});

// Show Alert - Button
const show = document.getElementById("alert-btn");
show.addEventListener("click", () => alert(getRandomTask()));
// show.addEventListener("mouseout", () => alert("mouseout"));
// show.onclick = () => alert("oncklick");
// show.onmouseenter = () => alert("onmouseenter");
// console.log(show);

// Log to Conosole - Button
const log = document.getElementById("console-btn");
log.addEventListener("click", () => console.log(getRandomTask()));
