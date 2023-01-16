let user_id = document.getElementById("user-id");
let pw1 = document.getElementById("user-pw1");
let pw2 = document.getElementById("user-pw2");
user_id.onchange = idCheck;
pw1.onchange = pwCheck1;
pw2.onchange = pwCheck2;

function idCheck() {
  if (user_id.value.length < 4 || user_id.value.length > 15) {
    alert("check");
    user_id.select();
  }
}

// function pwCheck1() {
//   if (pw1.value.length < 8) {
//     alert("check length");
//   }
// }
function pwCheck1() {
  if (pw1.value.length < 8) {
    alert("pw should more than 8");
    pw1.select();
    pw1.value = "";
  }
}

function pwCheck2() {
  if (pw1.value != pw2.value) {
    alert("pwCheck");
    pw2.select();
    pw2.focus;
  }
}
