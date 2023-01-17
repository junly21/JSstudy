let userId = document.getElementById("user-id");
let email = document.getElementById("email");
let userPw1 = document.getElementById("user-pw1");
let userPw2 = document.getElementById("user-pw2");

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 15) {
    alert("아이디의 자릿수를 확인하세요.");
    userId.value = "";
  }
}

function checkPw() {
  if (userPw1.value.length < 8) {
    alert("비밀번호의 자릿수를 확인하세요.");
    userPw1.value = "";
  }
}

function comparePw() {
  if (userPw1.value.length != userPw2.value.length) {
    alert("비밀번호를 확인하세요.");
    userPw2.value = "";
  }
}
