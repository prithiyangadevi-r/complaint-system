function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(res => res.text())
  .then(data => alert(data));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.text())
  .then(data => alert(data));
}

 function submitComplaint() {
  const desc = document.getElementById("desc").value;
  const priority = document.getElementById("priority").value;

  fetch("http://localhost:3000/complaint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ desc, priority })
  })
  .then(res => res.text())
  .then(data => alert(data));
}

function checkStatus() {
  document.getElementById("status").innerText = "Status: In Progress";
}