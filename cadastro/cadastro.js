document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
while (usuarios.some(usuario => usuario.id === id)) {
    		id++;
}
        const usuario = { id, nome, email, senha };
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        modal.style.display = "block";
        form.reset();
    });
});
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}