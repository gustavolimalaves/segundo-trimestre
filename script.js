const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-prguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativa")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.uerySelector(".texto-resultado")

const perguntas = [
    {
    enunciado: "Gustavo entrou no ensino médio em 2022. Ele faz parte do novo ensino médio?",
    alternativas: [
    "Sim, infelizmente!", 
    "Não, graças a Deus! "
    ]
},
{
    enunciado: "Você acha que o novo ensino médio ajuda o Gustavo a passar no vestibular?",
    alternativas: [
    "Sim, pois os professores são capacitados corretamente para os novos componentes.", 
    "Não, pois os professores são obrigados a darem aulas sem nenhuma ligação com a sua formação."
    ]
},
{
    enunciado: "O novo ensino médio prejudica alunos e professores?",
    alternativas: [
    "Sim", 
    "Não"
    ]
},{
    enunciado: "Os componentes do novo ensino médio foram adicionados de maneira funcional?",
    alternativas: [
    "Não, pois são componentes como: empreendedorismo, conversação, projeto de vida.", 
    "Sim, pois foram acrescentados aulas de: biologia, química, sociologia e história com aprofundamento."
    ]
},{
    enunciado: "Pergunta5",
    alternativas: [
    "Alternativa1", 
    "Alternativa2"
    ]
},       
]