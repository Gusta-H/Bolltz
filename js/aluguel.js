function showModal(){
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function hideModal(){
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}

document.addEventListener("DOMContentLoaded", function () {
    const opcoesCores = document.querySelectorAll(".imagem-cor");
    const imagemCarro = document.querySelector(".imagem-carro");

    opcoesCores.forEach(opcao => {
      opcao.addEventListener("click", () => {
        
        document.querySelectorAll(".opcao-cor").forEach(el => el.classList.remove("selecionado"));

        opcao.parentElement.classList.add("selecionado");

        imagemCarro.style.opacity = "0";
        setTimeout(() => {
          imagemCarro.src = opcao.getAttribute("src");
          imagemCarro.style.opacity = "1";
        }, 300);
      });
    });
  });