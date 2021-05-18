document.getElementById("submit-btn").addEventListener("click", function (e) {
  const email = document.getElementById("email");
  e.preventDefault();

  if (!email.value || !email.value.includes("@")) {
    document.querySelector(".error").style.display = "block";
    email.style.borderColor = "var(--light-red)";
  } else {
    document.querySelector(".error").style.display = "none";
    email.style.borderColor = "var(--pale-blue)";
    email.value = "";
  }
});
