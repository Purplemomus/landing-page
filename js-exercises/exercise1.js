
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const p = document.createElement("p");
p.classList.add("style-p")
p.textContent = "hey im red";
p.setAttribute("style","color:red");
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!";
h3.setAttribute("style","color:blue");
container.appendChild(h3);

const secContent = document.createElement("div");
secContent.classList.add("secContent");
secContent.setAttribute("style","border:black solid 2px; background:pink");
container.appendChild(secContent);

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
secContent.appendChild(h1)