let check = document.getElementById("shippingInfo");

let bName = document.order.billingName;
let bTell = document.order.billingTel;
let bAddr = document.order.billingAddr;
let sName = document.ship.shippingName;
let sTell = document.ship.shippingTel;
let sAddr = document.ship.shippingAddr;

check.addEventListener("click", t);

function t() {
  sName.value = bName.value;
  sTell.value = bTell.value;
  sAddr.value = bAddr.value;
}
