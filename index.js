const valorInicial = [
    {
    nome: 'Silas',
    idade: '32',
    email: 'silas-pereira_silva@sesisenai.org.br'
    }
]


// Carregar dados do Local Storage
localStorage.setItem("Cards", JSON.stringify(valorInicial));

var botaoSalvar = document.getElementById('formulario');

botaoSalvar.addEventListener('submit', function(e) {
    e.preventDefault();
    salvar();
})

function salvar() {
    // Pegar dados dos inputs
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;

    // Criar objeto
    let novaDica = {
        nome: nome,
        idade: idade,
        email: email
    }
    
    // Pegar dados do local Storage
    cards = JSON.parse(localStorage.getItem("Cards"));

    // Adicionar valores no array
    cards.push(novaDica);
    console.log(cards)

    // Atualizar os dados do Local Storage
    localStorage.setItem("Cards", JSON.stringify(cards));

    // Imprimir dados na tela
    imprimirNaTela();
}

function imprimirNaTela() {
    cards = JSON.parse(localStorage.getItem("Cards"));
    
    // Acessar a div onde os elementos serao impressos
    var divCards = document.getElementById('main');

    // Limpar tela
    divCards.innerHTML = '';
    

    cards.forEach((card, index) => {
        
        var novoItem = `<div id="dados-usuario">
        <h1>Olá, ${card.nome}.</h1>
        <p>Você acabou de criar o card.</p>
        <p>A posição do card no array é ${index}.</p>
        <button id="editar-card" onclick="deletar(${index})">deletar</button>
    </div>`;

    divCards.innerHTML += novoItem;
    });
}

function deletar(index){
    cards = JSON.parse(localStorage.getItem("Cards"));

    cards.forEach((card, indexArray) => {
        if (indexArray == index) {
            cards.splice(index, 1);
        }
    });

    // Atualizar o Local Storage
    localStorage.setItem("Cards", JSON.stringify(cards));

    imprimirNaTela();
}
