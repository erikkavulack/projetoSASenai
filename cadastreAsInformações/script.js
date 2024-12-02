document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const livro = document.getElementById('livro').value;
        const editora = document.getElementById('editora').value;
        const genero = document.getElementById('genero').value;
        const autor = document.getElementById('autor').value;
        const comentarios = document.getElementById('comentarios').value;
        const situacao = document.getElementById('situacao').value;
        const biblioteca = { livro, editora, genero, autor, comentarios, situacao };
        let bibliotecas = JSON.parse(localStorage.getItem('estante')) || [];
        usuarios.push(bibliotecas);
        localStorage.setItem('estante', JSON.stringify(bibliotecas));
        alert('Livro cadastrado com sucesso!');
        form.reset();
    });
});

// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal-content, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
