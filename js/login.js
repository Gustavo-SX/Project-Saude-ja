const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recarregar a página

  const user = document.getElementById("user").value;
  const pass = document.getElementById("password").value;
  const erro = document.getElementById("fail");

  // Exemplo básico
  if (user === "admin" && pass === "123") {
    window.location.href = "index.html";
  } else {
    erro.style.display = "block";
  }
});
