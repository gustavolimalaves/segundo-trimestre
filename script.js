const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gostou dos itinerarios obrigatórios proposto pelo Governo do Estado",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Esses novos componentes não agregam em uma preparação sólida para ENEM e vestibulares."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Me ajudou a me encontrar na área em que eu sou mais aplicado (a)."
            }
        ]
    },
    {
        enunciado: "Em relação com a merenda escolar, você gosta de ser obrigado a pegar todas as opções, sem escolher o que você vai comer?",
        alternativas: [
            {
                texto: "Com certeza não.",
                afirmacao: "Com essa ação eu sou obrigado a pegar comida que eu não quero para jogar no lixo."
            },
            {
                texto: "Sim, eu gosto.",
                afirmacao: "Assim, todos os alunos terão seu pratos iguais, sem distinção."
            }
        ]
    },
    {
        enunciado: "Você gosta de ficar um dia inteiro da sua semana na escola, sabendo que são 10 horas de aula?",
        alternativas: [
            {
                texto: "Sim, eu gosto.",
                afirmacao: "Assim, eu posso ficar fora de casa, o que mais gosto."
            },
            {
                texto: "Definitivamnte não.",
                afirmacao: "Além de ficar cansado para a semana toda, diminiu o rendimento e concentração."
            }
        ]
    },
    {
        enunciado: "O seu colégio oferta conforto e recuros para uma boa preparação acadêmica",
        alternativas: [
            {
                texto: "Infelizmente não.",
                afirmacao: "Nem o mínimo é oferecido. Ex: ar condicionado, internet, projetores."
            },
            {
                texto: "Sim oferece.",
                afirmacao: "É muito bom e confortável estudar no meu colégio, com todos os recursos meu rendimento é bem maior."
            }
        ]
    },
    {
        enunciado: "Você é a favor ou contra às plataformas de ensino?",
        alternativas: [
            {
                texto: "Sou a favor",
                afirmacao: "Com elas, eu consigo aborver melhor os conteúdos."
            },
            {
                texto: "Sou contra",
                afirmacao: "Além de aumentar o uso no celular, é difícil de absorver, e também, não nos importamos em fazer corretamente."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Atualmente...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
