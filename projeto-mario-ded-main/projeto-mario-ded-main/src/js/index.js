const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const link = video.src

function toggleModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener ("click", () => {
    toggleModal()
    video.setAttribute ("src", link)
})

botaoFecharModal.addEventListener ("click", () => {
    toggleModal()
    video.setAttribute ("src", "")
})