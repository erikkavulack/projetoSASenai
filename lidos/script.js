document.addEventListener('DOMContentLoaded', (event) => {

    let dados = JSON.parse(localStorage.getItem('estante')) || [];
    let tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];    
        for (let dado of dados) {
        let linha = tabela.insertRow();

        let celulaNome = linha.insertCell(0);
        let celulaEditora = linha.insertCell(1);
        let celulaGenero = linha.insertCell(2);
        let celulaComentários = linha.insertCell(3);
        let celulaSituacao = linha.insertCell(4);

        celulaNome.innerHTML = dado.livro;
        celulaEditora.innerHTML = dado.editora;
        celulaGenero.innerHTML = dado.genero;
        celulaComentários.innerHTML = dado.autor;
        celulaSituacao.innerHTML = dado.comentarios;
        celulaSituacao.innerHTML = dado.situacao ;


    }
});