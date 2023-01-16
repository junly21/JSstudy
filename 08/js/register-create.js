addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", newRegister);

function newRegister() {
  var newP = document.createElement("p"); // 새 p 요소 만들기
  var userName = document.querySelector("#userName");
  var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
  newP.appendChild(newText); // 텍스트 노드를 p 요소의 자식 요소로 연결하기

  var nameList = document.querySelector("#nameList");
  nameList.appendChild(newP); // p 요소를 #nameList의 자식 요소로 만들기
  userName.value = ""; // 텍스트 필드 지우기

  let delBtn = document.createElement("span");
  delBtn.setAttribute("class", "del");
  let btnX = document.createTextNode("X");

  delBtn.appendChild(btnX);
  newP.appendChild(delBtn);

  let del = document.querySelectorAll(".del");
  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", deletee);
  }
}

function deletee() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
