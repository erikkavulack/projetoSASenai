function gerarListaLivros() {
    const livrosLidos = document.getElementById("livrosLidos");
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const lidos = livros.filter(livro => livro.situacao === "Lido");
    if (livros.length === 0) {
        livrosLidos.innerHTML = "<p>Nenhum livro encontrado.</p>";
        return;
    }
    lidos.forEach((livro) => {
        const section = document.createElement("section");

        const header = document.createElement("div");
        header.classList.add("header-accordion");
        header.innerHTML = `
        
            <h3>${livro.livro}</h3>
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
                        <span>${livro.nota}</span>
                        <img src="/public/estrela.svg" alt="estrela" id="estrela">
                    </div>
                </div>
            </div>
            <div class="campo comentarios">
                <h4>COMENTÁRIOS</h4>
                <p>${livro.comentarios}</p>
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

        livrosLidos.appendChild(section);
    }

    );
}

gerarListaLivros();

function desconectarUsuario() {
    localStorage.removeItem('usuarioAtual');
    window.location.href = '../telaInicial/index.html';
}