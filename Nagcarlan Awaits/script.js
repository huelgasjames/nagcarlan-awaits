// Local Storage Login/Register System
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (localStorage.getItem(username)) {
    document.getElementById("userMessage").textContent = "Username already exists.";
  } else {
    localStorage.setItem(username, password);
    document.getElementById("userMessage").textContent = "Registration successful!";
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
    document.getElementById("userMessage").textContent = `Welcome back, ${username}!`;
  } else {
    document.getElementById("userMessage").textContent = "Invalid credentials.";
  }
});
