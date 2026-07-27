const formularioCadastro = document.getElementById("cadastroForm");

if (formularioCadastro) {

    formularioCadastro.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("emailCadastro").value.trim();
        const senha = document.getElementById("senhaCadastro").value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const existe = usuarios.some(u => u.email === email);

        if (existe) {

            alert("Este e-mail já está cadastrado!");

            return;

        }

        usuarios.push({
            nome,
            email,
            senha
        });

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

        window.location.href = "login.html";

    });

}