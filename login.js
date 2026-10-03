const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "mohamed" && password === "malak") {
    window.location.href = "./admin.html";
  } else {
    document.getElementById("errorMessage").textContent =
      "Invalid username or password";
  }
});
