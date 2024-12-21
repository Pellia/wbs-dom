// Get Main Elements
const btn = document.querySelector("button");
const output = document.getElementById("output");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

// Butten Event
btn.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const inputArr = [name, email, message];
    const inputList = document.createElement("ul");

    // Check for Input Data
    if (name !== "" && email !== "" && message !== "") {
        inputArr.forEach((input) => {
            const item = document.createElement("li");
            item.textContent = input;
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
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
});
