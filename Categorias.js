// categorias.js

document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".categoria-card .btn");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const categoria = botao.parentElement.querySelector("h3").textContent;

            alert("Você selecionou a categoria: " + categoria);

            window.location.href = "livros.html";

        });

    });

});