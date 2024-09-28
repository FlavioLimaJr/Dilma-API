    // Função para buscar uma frase aleatória da API
    function fetchQuote() {
        fetch('getFrase.php?json')
            .then(response => response.json())
            .then(data => {
                const quoteText = data.frase;
                document.getElementById('quoteText').innerText = `"${quoteText}"`;
            })
            .catch(error => console.error('Error fetching quote:', error));
    }

    // Chamar a função fetchQuote quando o documento estiver pronto
    document.addEventListener('DOMContentLoaded', fetchQuote);

    // Função para carregar as frases do arquivo frases.json
    function loadQuotes() {
        fetch('frases.json')
            .then(response => response.json())
            .then(data => {
                const quotesContainer = document.getElementById('quotesContainer');
                quotesContainer.innerHTML = ''; // Limpa o conteúdo anterior

                data.forEach(quote => {
                    const li = document.createElement('li');
                    li.textContent = quote; // Adiciona a frase ao item da lista
                    quotesContainer.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching quotes:', error));
    }

    // Manipulador de evento para o botão de colapso
    document.getElementById('toggleQuotesList').addEventListener('click', function() {
        const quotesList = document.getElementById('quotesList');
        const isVisible = quotesList.style.display === 'block';

        if (!isVisible) {
            loadQuotes(); // Carrega as frases apenas quando a lista é exibida
            quotesList.style.display = 'block'; // Exibe a lista
            this.textContent = '⬅️ Fechar lista'; // Muda o texto do botão
        } else {
            quotesList.style.display = 'none'; // Oculta a lista
            this.textContent = '➡️ Lista de frases'; // Restaura o texto do botão
        }
    });

    // Adicione o event listener para o botão de atualização
    document.getElementById('refreshButton').addEventListener('click', fetchQuote);