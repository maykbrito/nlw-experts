const perguntas = [
  {
    pergunta: "Qual time brasileiro conquistou a Copa Libertadores da América em 1992?",
    respostas: [
      "São Paulo FC",
      "Flamengo",
      "Grêmio"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o artilheiro da Copa do Mundo de 1994, onde o Brasil foi campeão?",
    respostas: [
      "Romário",
      "Bebeto",
      "Ronaldo"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano o Palmeiras conquistou a Copa Rio Internacional?",
    respostas: [
      "1997",
      "1999",
      "1998"
    ],
    correta: 2
  },
  {
    pergunta: "Qual clube brasileiro venceu a Supercopa Libertadores em 1993?",
    respostas: [
      "Cruzeiro",
      "Internacional",
      "Vasco da Gama"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o técnico da Seleção Brasileira na Copa do Mundo de 1998?",
    respostas: [
      "Vanderlei Luxemburgo",
      "Carlos Alberto Parreira",
      "Felipão"
    ],
    correta: 1
  },
  {
    pergunta: "Qual jogador brasileiro foi eleito o Melhor do Mundo pela FIFA em 1996?",
    respostas: [
      "Ronaldo",
      "Romário",
      "Rivaldo"
    ],
    correta: 2
  },
  {
    pergunta: "Em 1995, qual clube brasileiro venceu a Taça Conmebol?",
    respostas: [
      "Santos FC",
      "Grêmio",
      "Fluminense"
    ],
    correta: 0
  },
  {
    pergunta: "Qual foi o primeiro time a vencer a Copa do Brasil em 1990?",
    respostas: [
      "Corinthians",
      "Flamengo",
      "Vasco da Gama"
    ],
    correta: 1
  },
  {
    pergunta: "Em 1994, qual jogador brasileiro marcou um gol decisivo nas quartas de final da Copa do Mundo?",
    respostas: [
      "Bebeto",
      "Romário",
      "Zinho"
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube brasileiro foi campeão da Copa CONMEBOL em 1998?",
    respostas: [
      "Atlético Mineiro",
      "Corinthians",
      "Fluminense"
    ],
    correta: 0
  },
];



  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    
    quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }