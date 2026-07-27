const pesquisaVideo = document.querySelector(".barra-pesquisa input");

if (pesquisaVideo) {

    pesquisaVideo.addEventListener("keyup", () => {

        const texto = pesquisaVideo.value.toLowerCase();

        const videos = document.querySelectorAll(".card-video");

        videos.forEach(video => {

            const titulo = video.querySelector("h3").textContent.toLowerCase();

            if (titulo.includes(texto)) {
                video.style.display = "block";
            } else {
                video.style.display = "none";
            }

        });

    });

}
function pesquisarVideos() {
    const texto = document
        .getElementById("pesquisaVideo")
        .value
        .toLowerCase();

    const videos = document.querySelectorAll(".video-card");

    videos.forEach(video => {
        const titulo = video.dataset.titulo.toLowerCase();

        if (titulo.includes(texto)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
}