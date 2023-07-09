//  1. Verificar quando o usuário passa em cima do personagem

const personagens = document.querySelectorAll('.personagem');

// 2. Adicionar a classe do personagem que o usuário passar o cursor

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior: 'smooth'});
        }
        
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //3.a Trocar a Imagem

        alterarImagemPersonagemSelecionado(personagem);

        //3.b Trocar nome

        alterarNomePersonagemSelecionado(personagem);

        //3.c Trocar Descrição
        
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

