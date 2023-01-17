let bName = document.getElementById("billingName");
let bTell = document.getElementById("billingTel");
let bAddr = document.getElementById("billingAddr");
let sName = document.getElementById("shippingName");
let sTell = document.getElementById("shippingTel");
let sAddr = document.getElementById("shippingAddr");
let check = document.getElementById("shippingInfo");
// var check = document.querySelector("#shippingInfo");

check.addEventListener("click", t);

function t() {
  sName.value = bName.value;
  sTell.value = bTell.value;
  sAddr.value = bAddr.value;
}
