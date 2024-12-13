document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const livro = document.getElementById('livro').value;
    const editora = document.getElementById('editora').value;
    const genero = document.getElementById('genero').value;
    const autor = document.getElementById('autor').value;
    const nota = document.getElementById('nota').value;
    const comentarios = document.getElementById('comentarios').value;
    const situacao = document.getElementById('situacao').value;

    const novoLivro = {
        livro,
        editora,
        genero,
        autor,
        nota,
        comentarios,
        situacao
    };


    let livros = JSON.parse(localStorage.getItem('livros')) || [];

    livros.push(novoLivro);

    localStorage.setItem('livros', JSON.stringify(livros));

    exibirModal(`Livro "${livro}" cadastrado com sucesso!`);

    document.getElementById('cadastroForm').reset();
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