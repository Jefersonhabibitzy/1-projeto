function fazerLogin() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (user === usuarioCorreto && pass === senhaCorreta) {
        window.location.href = "https://images.unsplash.com/photo-1575936123452-b67c3203c357";
    } else {
        document.getElementById('erro').innerText = "Usuário ou senha incorretos!";
    }
}