const splashScreen = document.querySelector("#splash");
const loadingText = document.getElementById("loading");
const infoScreen = document.getElementById("info");
const errorScreen = document.getElementById("error");

const unitSwitch = document.querySelector("#units input");

function hideSplash() {
  splashScreen.style.transform = "translateY(-1500px)";
}

export function showSplash() {
  splashScreen.style.transform = "translateY(0px)";

  infoScreen.style.opacity = "0";
  infoScreen.style.display = "none";

  errorScreen.style.opacity = "0";
  errorScreen.style.display = "none";

  unitSwitch.checked = false;
}

export function showLoadingScreen() {
  hideSplash();
  loadingText.style.opacity = "1";
  loadingText.style.display = "block";
}

export function showInfoScreen() {
  loadingText.style.opacity = "0";
  loadingText.style.display = "none";

  infoScreen.style.display = "flex";
  infoScreen.style.opacity = "1";
}

export function showErrorScreen() {
  loadingText.style.opacity = "0";
  loadingText.style.display = "none";

  errorScreen.style.display = "flex";
  errorScreen.style.opacity = "1";
}
