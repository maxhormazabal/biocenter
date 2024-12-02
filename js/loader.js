const spinnerWrapperElement = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  setTimeout(() => {
    spinnerWrapperElement.style.opacity = "0";
    spinnerWrapperElement.style.diplay = "none";
  }, 1000);
});
