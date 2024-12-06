const campoNovoNome = document.getElementById("campoNovoNome");
const campoNovoEmail = document.getElementById("campoNovoEmail");
const campoRepSenha = document.getElementById("campoRepSenha");

function  cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            nome: campoNovoNome.value,
            login: campoNovoEmail.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        modal.style.display = "block";
        window.location.href = "/bibliotecas/index.html"
    } else {
        alert("As senhas são diferentes!");
    }
    
}

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