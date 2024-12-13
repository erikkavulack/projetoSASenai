function obterUsuarios() {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function gerarIdUsuario(usuarios) {
    let id = 1;
    const idsExistentes = usuarios.map(usuario => usuario.id);

    while (idsExistentes.includes(id)) {
        id++;
    }

    return id;
}

document.getElementById('formularioLogin').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    const usuarios = obterUsuarios();

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuario) {
        exibirModal(`Bem-vindo, ${usuario.nome}!`);
        localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
        setTimeout(() => window.location.href = '../bibliotecas/index.html', 2000); 
    } else {
        exibirModal('E-mail ou senha inválidos.');
    }
});

function exibirModal(mensagem) {
    const modal = document.getElementById('modal');
    const mensagemModal = document.getElementById('mensagemModal');

    mensagemModal.textContent = mensagem;
    modal.classList.remove('oculto');
    modal.classList.add('visivel');
}

function fecharModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('visivel');
    modal.classList.add('oculto');
}

document.getElementById('fecharModal').addEventListener('click', fecharModal);