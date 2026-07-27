document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".card-admin .btn");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const opcao = botao.parentElement.querySelector("h2").textContent;

            alert("Você clicou em: " + opcao);

        });

    });

});