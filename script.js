

// Seleciona todos os botões de curtida
const botoes = document.querySelectorAll("article button");


// Função dos botões de curtida
botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const texto = botao.querySelector("span");

        if (!curtiu) {
            texto.textContent = Number(texto.textContent) + 1;
            curtiu = true;

            botao.classList.add("curtido");

        } else {
            texto.textContent = Number(texto.textContent) - 1;
            curtiu = false;

            botao.classList.remove("curtido");
        }

    });

});


// Seleciona o botão de tema escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");


// Ativa o evento do tema escuro
btnTemaEscuro.addEventListener("click", mudaTema);


// Função para mudar o tema
function mudaTema() {

    const corpoPagina = document.body;

    corpoPagina.classList.toggle("tema-escuro");

    // Muda o ícone do botão
    if (corpoPagina.classList.contains("tema-escuro")) {
        btnTemaEscuro.textContent = "☀️";
        btnTemaEscuro.setAttribute("aria-label", "Ativar tema claro");
    } else {
        btnTemaEscuro.textContent = "🌓";
        btnTemaEscuro.setAttribute("aria-label", "Ativar tema escuro");
    }
}
