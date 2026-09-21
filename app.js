function fazerLogin() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (user === usuarioCorreto && pass === senhaCorreta) {
        window.location.href = "papel-parede-windows.webp";
    } else {
        document.getElementById('erro').innerText = "Usuário ou senha incorretos!";
    }
}