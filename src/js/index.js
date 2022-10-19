/*
    OBJETIVO- quando clicamos na aba, temos que mostrar o conteúdo da aba
    selecionada, enquanto escondemos o conteúdo da aba anterior
    -Passo 1: Identificar e pegar os elementos que representam as abas no HTML;
    -Passo 2: Identificar o clique no elemento da aba;
    -Passo 3: Quando o usuário clicar, desmarcar a aba selecionada;
    -Passo 4: Marcar a aba clicada como SELECIONADO;
    -Passo 5: Esconder o conteúdo anterior;
    -Passo 6: Mostrar o conteúdo da aba selecionada.
*/

//Passo 1:
const abas = document.querySelectorAll(".aba");
    //Passo 2:
    abas.forEach(aba => {aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){return};
        
        selecionarAba(aba);
        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba){
    //Passo 3:
    const abaSelecionado = document.
    querySelector(".aba.selecionado");
    abaSelecionado.classList.remove("selecionado");
    //Passo 4:
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    //Passo 5:
    const informacaoSelecionado = document.
    querySelector(".informacao.selecionado");
    informacaoSelecionado.classList.remove("selecionado");
    //Passo 6:
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.
    getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}