// Espera o documento HTML ser completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que têm a classe 'card'
    const cards = document.querySelectorAll('.card');

    // Para cada card encontrado, adiciona um "ouvinte" de evento de clique
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega o valor do atributo 'data-pagina' do card que foi clicado
            const paginaDeDestino = card.getAttribute('data-pagina');

            // Redireciona a janela do navegador para a página de destino
            if (paginaDeDestino) {
                window.location.href = paginaDeDestino;
            }
        });
    });

});