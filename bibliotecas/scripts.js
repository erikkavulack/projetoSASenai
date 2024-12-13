function desconectarUsuario() {
    localStorage.removeItem('usuarioAtual');
    window.location.href = '../telaInicial/index.html';
}