document.querySelector(".get_started").addEventListener("click", function () {
  const emailInput = document.querySelector(".email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailInput.value)) {
    alert("Thank you! You've entered a valid email: " + emailInput.value);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
    emailInput.value = "";
  }
});
