let shippingInfo = document.getElementById("shippingInfo");
let shippingName = document.getElementById("shippingName");
let billingName = document.getElementById("billingName");
shippingInfo.addEventListener("click", check);

function check() {
  if (shippingInfo.checked == true) {
    alert("checked");
    shippingName.value = billingName.value;
  } else {
    alert("dischecked");
    shippingName.value = "";
  }
}
