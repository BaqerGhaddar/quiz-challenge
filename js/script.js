const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const formContainer = document.getElementById('form-container')




// const question = document.createElement('question')

const answerButtonsElement = document.createElement('answer-button')
const time = document.getElementById('time')

let shuffleQuestion, currentQuestionIndex;

let timerId;

const Question = [
    {
        question: "what is 2 + 2?",
        answer: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '6', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: "what is 2 + 5?",
        answer: [
            { text: '7', correct: true },
            { text: '22', correct: false },
            { text: '6', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: "what is 5 + 5?",
        answer: [
            { text: '10', correct: true },
            { text: '55', correct: false },
            { text: '32', correct: false },
            { text: '80', correct: false }
        ]
    }
]

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffleQuestion = Question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()


    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct){
            element.classList.add('correct')
        } else {
          element.classList.add('wrong')
        }
        function clearStatusClass(element) {
          element.classList.remove('correct')
          element.classList.remove('wrong')
        }
    }

    timerId = setInterval(function () {
        if (time.innerText == 0) {
            clearInterval(timerId)
            alert('time out')
            return
        }
        time.innerText--
    }, 1000)
}

function setNextQuestion() {

    // code to check the answer
    
    

    if(currentQuestionIndex < shuffleQuestion.length) {
        showQuestion(shuffleQuestion[currentQuestionIndex])
        currentQuestionIndex++;
    } else {
        endQuiz()
    }
}


function showQuestion(question) {
    const questionDiv = document.querySelector('#question')
    const answer1Btn = document.querySelector('#answer1')
    const answer2Btn = document.querySelector('#answer2')
    const answer3Btn = document.querySelector('#answer3')
    const answer4Btn = document.querySelector('#answer4')

    questionDiv.textContent = question.question
    answer1Btn.textContent = question.answer[0].text
    answer2Btn.textContent = question.answer[1].text
    answer3Btn.textContent = question.answer[2].text
    answer4Btn.textContent = question.answer[3].text

    answer1Btn.addEventListener("click", setNextQuestion)
    answer2Btn.addEventListener("click", setNextQuestion)
    answer3Btn.addEventListener("click", setNextQuestion)
    answer4Btn.addEventListener("click", setNextQuestion)
}

function endQuiz () {
    clearInterval(timerId)

  formContainer.classList.remove('hide') 
  questionContainer.classList.add('hide')

  const scoreSpan = document.querySelector('#score');
  scoreSpan.textContent = time.innerText

}



function selectAnswer(e){
    const selectButton = e.target.querySelector
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement)
}


// create a function to store the intials to localstorage

const storageInput = document.querySelector('.storage-input');
const text = document.querySelector('text');
const storageButton = document.querySelector('#storage-button');
const storedInput = localStorage.getItem('textInput')
const savedScores = JSON.parse(localStorage.getItem('all-score')) || []; // short circuit

if(storedInput){
    // text.textContent = storedInput
}


storageButton.addEventListener('click', event => {
    event.preventDefault();
    const newScore = {
        name: storageInput.value,
        score: time.innerText
    }

    savedScores.push(newScore)
    localStorage.setItem('all-score',JSON.stringify(savedScores))
    // text.textContent = letter,target,value

    // redirect to the highscore HTML page
    window.location.href = 'highscores.html'
})

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', text.textContent)
}



// button.addEventListener("click", saveToLocalStorage)



// add an eventlistener to your Submit button


