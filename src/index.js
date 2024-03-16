import logo from "./imgs/logo.png";
import checkErrors from "./userInput";

const input = document.querySelector("input");
const submitBtn = document.getElementById("submit");

function loadImgs() {
  const logoImg = document.querySelector("img");

  logoImg.src = logo;
}

loadImgs();

input.addEventListener("input", () => {
  checkErrors();
});

submitBtn.addEventListener("click", () => {
  const inputError = checkErrors();

  if (!inputError) {
    console.log("hi");
  }
});


