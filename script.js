const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The Taj Mahal, Lotus Temple, Golden Temple, India Gate and other famous heritage monuments are being affected by ?',
    answers: [
      { text: 'Air pollution', correct: true },
      { text: 'Water pollution', correct: false },
      { text: 'noice pollution', correct: false },
      { text: 'All', correct: false }
    ]
  },
  {
    question: 'What is called for the matured soils which are arranged in a series of zones?',
    answers: [
      { text: 'Soil zones', correct: false },
      { text: 'Soil layers', correct: false },
      { text: 'Soil horizons', correct: true },
      { text: 'Soil benches', correct: false }
    ]
  },
  {
    question: 'Which of the following is called the secondary air pollutant?',
    answers: [
      { text: 'Pans', correct: false },
      { text: 'Ozone', correct: true },
      { text: 'Carbon monoxide', correct: false },
      { text: 'Nitrogen dioxide', correct: false }
    ]
    
  },
  {
    question: 'Which of the following particles is called the particulate pollutants?',
    answers: [
      { text: 'ozone', correct: false },
      { text: 'Fly ash', correct: true },
      { text: 'Radon', correct: false },
      { text: 'Ethylene', correct: false }
    ]
    
  },
  {
    question: 'Which of the following rivers is called the world’s most polluted river?',
    answers: [
      { text: 'Yamuna River', correct: false },
      { text: 'Ganga River', correct: true },
      { text: 'Cauvery River', correct: false },
      { text: 'Chenab River', correct: false }
    ]
    
  },
  {
    question: 'How much of India’s coastline is vulnerable to disasters?',
    answers: [
      { text: '6000', correct: false },
      { text: '5700', correct: true },
      { text: '5200', correct: false },
      { text: '6700', correct: false }
    ]
    
  },
  {
    question: 'How much percentage of the landmass is prone to earthquakes in India?',
    answers: [
      { text: 'Around 60%', correct: false },
      { text: 'Around 58%', correct: true },
      { text: 'Around 52%', correct: false },
      { text: 'Around 50%', correct: false }
    ]
    
  },
  {
    question: 'When did National Disaster Management Authority formed?',
    answers: [
      { text: '2010', correct: false },
      { text: '2005', correct: true },
      { text: '2000', correct: false },
      { text: '2015', correct: false }
    ]
    
  },
 
]