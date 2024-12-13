function gerarListaLivros() {
    const livrosNaoLidos = document.getElementById("livrosNaoLidos");
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const NaoLido = livros.filter(livro => livro.situacao === "NaoLido");

    if (NaoLido.length === 0) {
        livrosNaoLidos.innerHTML = "<p>Nenhum livro encontrado.</p>";
        return;
    }

    // livrosNaoLidos.innerHTML = "";

    NaoLido.forEach((livro, index) => {
        const section = document.createElement("section");
        const header = document.createElement("div");
        header.classList.add("header-accordion");
        header.innerHTML = `
            <h3>${livro.livro}<img src="/public/editar.svg" alt="editar" class="editar-livro" data-index="${index}"></h3>
            <img src="/public/seta.svg" alt="seta" class="seta">
        `;

        const infos = document.createElement("div");
        infos.classList.add("infos");
        infos.innerHTML = `
            <div class="info">
                <div class="campo">
                    <h4>AUTOR</h4>
                    <p>${livro.autor}</p>
                </div>
                <div class="campo">
                    <h4>EDITORA</h4>
                    <p>${livro.editora}</p>
                </div>
                <div class="campo">
                    <h4>GÊNERO</h4>
                    <p>${livro.genero}</p>
                </div>
                <div class="campo">
                    <h4>Nota</h4>
                    <div class="avaliacao">
                        <span>${livro.nota}/5</span>
                        <img src="/public/estrela.svg" alt="estrela" id="estrela">
                    </div>
                </div>
            </div>
            <div class="campo comentarios">
                <h4>COMENTÁRIOS</h4>
                <p>${livro.comentarios || "Sem comentários"}</p>
            </div>
        `;

        const seta = header.querySelector(".seta");
        seta.addEventListener("click", () => {
            const isCurrentlyOpen = infos.classList.contains("mostrar");

            document.querySelectorAll(".infos").forEach((info) => info.classList.remove("mostrar"));
            document.querySelectorAll(".header-accordion .seta").forEach((img) => img.classList.remove("girar"));

            if (!isCurrentlyOpen) {
                infos.classList.add("mostrar");
                seta.classList.add("girar");
            }
        });

        section.appendChild(header);
        section.appendChild(infos);

        livrosNaoLidos.appendChild(section);
    });

    document.querySelectorAll('.editar-livro').forEach((botao) => {
        botao.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            abrirModalEdicao(index);
        });
    });
}


function abrirModalEdicao(index) {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const naoLidos = livros.filter(livro => livro.situacao === "NaoLido");
    const livro = naoLidos[index];

    document.getElementById('modalNome').value = livro.livro || '';
    document.getElementById('modalEditora').value = livro.editora || '';
    document.getElementById('modalGenero').value = livro.genero || '';
    document.getElementById('modalNota').value = livro.nota || '';
    document.getElementById('modalComentarios').value = livro.comentarios || '';
    document.getElementById('modalSituacao').value = livro.situacao || 'NaoLido';

    document.getElementById('modal').dataset.index = index;

    document.getElementById('modal').style.display = 'flex';
}

document.getElementById('modalFechar').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('modalSalvar').addEventListener('click', () => {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const naoLidos = livros.filter(livro => livro.situacao === "NaoLido");
    const indexNaoLidos = document.getElementById('modal').dataset.index;

    const livroNaoLido = naoLidos[indexNaoLidos];
    const indexLivros = livros.findIndex(livro => livro.livro === livroNaoLido.livro);

    livros[indexLivros] = {
        ...livros[indexLivros],
        livro: document.getElementById('modalNome').value.trim(),
        editora: document.getElementById('modalEditora').value.trim(),
        genero: document.getElementById('modalGenero').value.trim(),
        nota: document.getElementById('modalNota').value.trim(),
        comentarios: document.getElementById('modalComentarios').value.trim(),
        situacao: document.getElementById('modalSituacao').value,
    };

    localStorage.setItem('livros', JSON.stringify(livros));

    document.getElementById('modal').style.display = 'none';
    document.getElementById('livrosNaoLidos').innerHTML = '';
    gerarListaLivros();
});


gerarListaLivros();

function desconectarUsuario() {
    localStorage.removeItem('usuarioAtual');
    window.location.href = '../telaInicial/index.html';
}