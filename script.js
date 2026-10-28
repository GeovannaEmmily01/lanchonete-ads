const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
    // A regra de ouro: impede o recarregamento da página
    event.preventDefault();

    // Capturando os dados para teste
    const nomeDigitado = document.getElementById('nome').value;
    const senhaDigitada = document.getElementById('senha').value;
    const confirmaSenhaDigitada = document.getElementById('confirma-senha').value;

    // Limpa mensagem de erro anterior
    const msgAnterior = document.getElementById('mensagem-erro');
    if (msgAnterior) {
        msgAnterior.remove();
    }

    // Função auxiliar para criar e injetar o erro em vermelho (Requisitos 4 e 5)
    function mostrarErro(texto) {
        const p = document.createElement('p');
        p.id = 'mensagem-erro';
        p.textContent = texto;
        p.style.color = 'red';
        p.style.marginTop = '10px';
        p.style.textAlign = 'center';
        
        form.appendChild(p);
    }

    // REQUISITO 2: Verificação da senha com no mínimo 6 caracteres
    if (senhaDigitada.length < 6) {
        mostrarErro("A senha deve ter no mínimo 6 caracteres!");
        return; // Interrompe para não continuar
    }

    // REQUISITO 3: Verificação de senhas iguais
    if (senhaDigitada !== confirmaSenhaDigitada) {
        mostrarErro("As senhas não coincidem!");
        return; // Interrompe para não continuar
    }

    console.log("Ação interceptada com sucesso!");
    console.log("Cliente:", nomeDigitado);

     // NOVO CÓDIGO: Redireciona o usuário para o cardápio após 1 segundo (1000 milissegundos)
    setTimeout(() => {
        window.location.href = "cardapio.html";
    }, 1000);

});
