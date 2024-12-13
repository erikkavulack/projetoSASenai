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
document.getElementById('formularioCadastro').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const confirmarSenha = document.getElementById('confirmarSenhaCadastro').value;

    const usuarios = obterUsuarios();

    if (usuarios.some(usuario => usuario.email === email)) {
        exibirModal('E-mail já cadastrado.');
        return;
    }

    if (senha !== confirmarSenha) {
        exibirModal('As senhas não coincidem.');
        return;
    }

    const id = gerarIdUsuario(usuarios);

    usuarios.push({ id, nome, email, senha });
    salvarUsuarios(usuarios);

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);


    exibirModal('Usuário cadastrado com sucesso!');
    localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
    setTimeout(() => window.location.href = '../bibliotecas/index.html', 2000);
    document.getElementById('formularioCadastro').reset();
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