document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy credentials
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Optional: Redirect after login
  } else {
    document.getElementById("error-msg").textContent = "Invalid username or password.";
  }
});
