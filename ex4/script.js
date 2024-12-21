const btn = document.querySelector("button");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const inputList = document.createElement("ul");
    const nameItem = document.createElement("li");
    const emailItem = document.createElement("li");
    const messageItem = document.createElement("li");

    if (name !== "" || email !== "" || message !== "") {
        nameItem.textContent = name;
        inputList.appendChild(nameItem);
        output.appendchild(inputList);
        // alert();
    } else {
        alert();
    }
});
