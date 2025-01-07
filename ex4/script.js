// Get Main Elements
const btn = document.querySelector("button");
const output = document.getElementById("output");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const inputArr = [name, email, message];

// Butten Event
btn.addEventListener("click", (event) => {
    event.preventDefault();

    // Create <ul> Element
    const inputList = document.createElement("ul");

    // Add input Data
    if (name.value && email.value && message.value) {
        inputArr.forEach((input) => {
            const item = document.createElement("li");
            item.textContent = input.value;
            item.classList.add("p-4", "mb-4", "text-md", "font-bold", "text-green-800", "rounded-lg", "bg-green-50");
            inputList.appendChild(item);
        });
        output.appendChild(inputList);
    } else {
        const errorItem = document.createElement("li");
        errorItem.textContent = "Error";
        errorItem.classList.add("p-4", "mb-4", "text-md", "font-bold", "text-red-800", "rounded-lg", "bg-red-50");
        output.appendChild(inputList);
        inputList.appendChild(errorItem);
    }

    // Clear Input Fields
    name.value = "";
    email.value = "";
    message.value = "";
});
