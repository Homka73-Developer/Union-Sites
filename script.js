document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("#toggleButton");
  const modLinks = document.querySelector(".mod-links");
  const sideNav = document.querySelector(".but1");

  toggleButton.addEventListener("click", function () {
    modLinks.classList.toggle("visible");
    sideNav.innerHTML = "&gt;"
  });
})

document.getElementById("checkPassword").addEventListener("click", () => {
  const userPassword = prompt("Enter the password:");
  if (userPassword === password) {
    window.location.href = secretPage;
  } else {
    alert("Incorrect password. Returning to the main page.");
    window.location.href = mainPage;
  }
});













