// 1. Seleciona TODOS os botões da tela
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
const contadorHtml = document.getElementById('contador-itens');
const listaCarrinho = document.getElementById('lista-carrinho');

// Variável para armazenar o estado atual
let totalNoCarrinho = 0;

// 2. Cria um loop (forEach) para ouvir o clique em cada botão individualmente
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        totalNoCarrinho++; // Inc let totalNoCarrinho: number
        contadorHtml.innerText = totalNoCarrinho; // Atualiza a tela

        // Pega o card/produto pai para encontrar o preço específico dele
        const cardProduto = botao.closest('.card-produto');
        const precoTexto = cardProduto.querySelector('.preco-destaque').innerText;

        // Converte o texto do preço (ex: "R$ 28,00") para número
        const precoNumerico = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim()) || 0;

        const novoItem = document.createElement('li');
        novoItem.textContent = 'Item adicionado';
        listaCarrinho.appendChild(novoItem);

        // Atualiza o valor total somando o preço real do produto clicado
        const valorTotalElemento = document.getElementById('valor-total');
        let valorAtual = parseFloat(valorTotalElemento.innerText.replace(',', '.')) || 0;
        valorAtual += precoNumerico;
        valorTotalElemento.innerText = valorAtual.toFixed(2).replace('.', ',');
    });
});

// Selecionando os novos elementos da Sidebar
const btnAbrirCarrinho = document.getElementById('abrir-carrinho');
const btnFecharCarrinho = document.getElementById('fechar-carrinho');
const sidebar = document.getElementById('sidebar-carrinho');

// Evento para ABRIR
btnAbrirCarrinho.addEventListener('click', () => {
    // Removemos a classe que esconde e adicionamos a classe que mostra
    sidebar.classList.remove('carrinho-oculto');
    sidebar.classList.add('carrinho-aberto');
});

// Evento para FECHAR
btnFecharCarrinho.addEventListener('click', () => {
    // Fazemos o inverso
    sidebar.classList.remove('carrinho-aberto');
    sidebar.classList.add('carrinho-oculto');
});