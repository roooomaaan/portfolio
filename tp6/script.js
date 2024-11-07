function login() {
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value

  if (username === "admin" && password === "admin") {
    window.location.href = "oui.html"
  } else {
    window.location.href = "non.html"
  }
}

function back() {
  window.location.href = "index.html"
}