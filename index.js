// Login

function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "admin") {
        alert("Login efetuado");
        location.href  = "home.html";
    } else {
        alert('Usuário incorreto');
    }
}

// Theme

const chk = document.getElementById("chk")
const h3 = document.getElementById("h3")

h3.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})