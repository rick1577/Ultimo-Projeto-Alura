document.addEventListener("DOMContentLoaded", () => {
    const passos = document.querySelectorAll(".passo");
    const botoesProximo = document.querySelectorAll(".btn-proximo");

    // Função para alternar entre os passos
    function alternarPasso(atual, proximo) {
        const passoAtual = document.getElementById(`passo-${atual}`);
        const passoProximo = document.getElementById(`passo-${proximo}`);

        if (passoAtual) passoAtual.classList.remove("ativo");
        if (passoProximo) passoProximo.classList.add("ativo");
    }

    // Adiciona o evento de clique em todos os botões
    botoesProximo.forEach((botao) => {
        botao.addEventListener("click", (e) => {
            const passoAtual = botao.closest(".passo").id.split("-")[1];
            const proximoPasso = botao.getAttribute("data-proximo");

            alternarPasso(passoAtual, proximoPasso);
        });
    });

    // Efeito sinistro no botão (sons e luzes)
    botoesProximo.forEach((botao) => {
        botao.addEventListener("mouseenter", () => {
            botao.style.background = "linear-gradient(45deg, #ff004f, #520066)";
        });

        botao.addEventListener("mouseleave", () => {
            botao.style.background = "linear-gradient(45deg, #520066, #ff004f)";
        });
    });
});
