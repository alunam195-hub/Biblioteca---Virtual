const pesquisaLivro = document.querySelector(".barra-pesquisa input");

if (pesquisaLivro) {

    pesquisaLivro.addEventListener("keyup", () => {

        const texto = pesquisaLivro.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const titulo = card.querySelector("h3").textContent.toLowerCase();

            if (titulo.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
function pesquisar() {

    const texto = document.getElementById("pesquisa").value.trim();

    if (texto === "") {
        alert("Digite algo para pesquisar.");
        return;
    }

    window.location.href = "Pesquisa.html?busca=" + encodeURIComponent(texto);

}