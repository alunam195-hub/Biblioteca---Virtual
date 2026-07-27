document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario) {

        const boasVindas = document.getElementById("boasVindas");

        if (boasVindas) {
            boasVindas.innerHTML = `Bem-vindo(a), ${usuario.nome}!`;
        }

    }

});