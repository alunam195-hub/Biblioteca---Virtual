const campoPesquisa = document.querySelector(".barra-pesquisa input");

if (campoPesquisa) {

    campoPesquisa.addEventListener("keyup", () => {

        const texto = campoPesquisa.value.toLowerCase();

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