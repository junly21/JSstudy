userName = document.getElementById("userName");
addBtn = document.getElementById("btn");
addBtn.addEventListener("click", create);

let list = document.getElementById("nameList");

function create() {
  let p = document.createElement("p");
  let name = document.createTextNode(`${userName.value}`);
  p.appendChild(name);
  list.appendChild(p);
  userName.value = "";

  let delBtn = document.createElement("span");
  let delText = document.createTextNode("X");
  delBtn.setAttribute("class", "del");
  delBtn.appendChild(delText);

  p.appendChild(delBtn);

  let removeBtns = document.querySelectorAll(".del");

  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", deletee);
  }
}

function deletee() {
  if (this.parentNode.parentNode) {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
}
