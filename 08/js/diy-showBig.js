let cup = document.getElementById("cup");
let small_pics = document.querySelectorAll(".small");

for (let i = 0; i < small_pics.length; i++) {
  small_pics[i].addEventListener("click", showBig);

  function showBig() {
    cup.setAttribute("src", `${this.src}`);
  }
}
