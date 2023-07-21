
const test = document.querySelector(".visuals")

const clipContainer = document.createElement("article");
const clipLabel = document.createElement("p");
const audio = document.createElement("audio");
const deleteButton = document.createElement("button");

clipContainer.classList.add("clip");
audio.setAttribute("controls", "");
deleteButton.innerHTML = "Delete";
clipLabel.innerHTML = "Something";

clipContainer.appendChild(audio);
clipContainer.appendChild(clipLabel);
clipContainer.appendChild(deleteButton);
test.appendChild(clipContainer);