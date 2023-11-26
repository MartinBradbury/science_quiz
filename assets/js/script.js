// getting required elements using querySelector which identifies elements first time appears.
const next_btn = document.querySelector(".next_btn");
const start_btn = document.querySelector(".start_btn");
const instructions_area = document.querySelector(".instructions_area");
const begin_btn = document.querySelector(".begin_btn");
const game_area = document.querySelector(".game_area");
const option_list = document.querySelector(".option_list");
const options = document.querySelector('.option_list');
const exit_btn = document.querySelector(".exit_btn");
const timer_num = document.querySelector(".progress_text");
const time_line = document.querySelector(".progress_bar");
const result_area = document.querySelector(".result_area");
const header_main = document.querySelector(".header_main");
const footer_basic = document.querySelector(".footer_basic");
const quit = document.querySelector(".quit");
const scoreText = result_area.querySelector(".score_value");
const difficulty_area = document.querySelector(".difficulty_area");
const category_area = document.querySelector(".category_area");
const easy_btn = document.querySelector(".easy_btn");
const medium_btn = document.querySelector(".medium_btn");
const hard_btn = document.querySelector(".hard_btn");
const sci_btn = document.querySelector(".sci_btn");
const games_btn = document.querySelector(".games_btn");
const film_btn = document.querySelector(".film_btn");
const general_btn = document.querySelector(".general_btn");

let questionElement = document.getElementById('question');
let questionsList = [];
let currentIndex = 0;
let question_count = 0;
let question_number = 1;
let counter;
let widthValue = 100;
let timeValue = 15;
let progressLine;
let userScore = 0;
let opt;
let difficulty = 'easy';
let category = '1';


// If the start button is clicked
start_btn.addEventListener("click", () => {
    //Shows instructions on click
    instructions_area.classList.add("activeInfo");
    header_main.classList.add("activeHeader");
    footer_basic.classList.add("activeFooter");
});

easy_btn.addEventListener("click", () => {
    difficulty_area.classList.remove("activeDifficulty");
    instructions_area.classList.remove("activeInfo");
    game_area.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'easy';
    loadQuestion().then(() => {
        showQuestion();
    });
});

medium_btn.addEventListener("click", () => {
    difficulty_area.classList.remove("activeDifficulty");
    instructions_area.classList.remove("activeInfo");
    game_area.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'medium';
    loadQuestion().then(() => {
        showQuestion();
    });
});

hard_btn.addEventListener("click", () => {
    difficulty_area.classList.remove("activeDifficulty");
    instructions_area.classList.remove("activeInfo");
    game_area.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'hard';
    loadQuestion().then(() => {
        showQuestion();
    });
});

next_btn.addEventListener("click", () => {
    if (question_number < questionsList.length) {
        currentIndex += 1;
        question_number += 1;
        questionCounter(question_number);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(progressLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        showQuestion();
    } else {
        console.log("Questions complete!");
        showResultArea();

    }

});

begin_btn.addEventListener("click", () => {
    instructions_area.classList.remove("activeInfo");
    category_area.classList.add("activeCategory");
    //difficulty_area.classList.add("activeDifficulty");
});

sci_btn.addEventListener("click", () => {
    category_area.classList.remove("activeCategory");
    difficulty_area.classList.add("activeDifficulty");
    category = '17';
});

games_btn.addEventListener("click", () => {
    category_area.classList.remove("activeCategory");
    difficulty_area.classList.add("activeDifficulty");
    category = '15';
});

film_btn.addEventListener("click", () => {
    category_area.classList.remove("activeCategory");
    difficulty_area.classList.add("activeDifficulty");
    category = '11';
});

general_btn.addEventListener("click", () => {
    category_area.classList.remove("activeCategory");
    difficulty_area.classList.add("activeDifficulty");
    category = '9';
});



// Reloads the window on restart test button click
quit.addEventListener("click", () => {
    window.location.reload();
});

//Exits the quiz to start
exit_btn.addEventListener("click", () => {
    instructions_area.classList.remove("activeInfo");
});

//Fetching questions from the API and loggin in the console in json
async function loadQuestion() {
    //console.timeEnd('APIUrl');
    const APIUrl = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`;
    const result = await fetch(APIUrl);
    const data = await result.json();
    console.time('APIUrl');
    questionsList = data.results;
    console.log(questionsList);
    questionCounter(1);
    showQuestion();
}

/* correct_answer is from the json data */
/* incorrect_answers is from the json data*/
//display Question and options
function showQuestion() {
    let question = questionsList[currentIndex];
    let correctAnswer = question.correct_answer;
    let incorrectAnswer = question.incorrect_answers;

    // Shuffle the incorrect answers array
    incorrectAnswer.sort(() => Math.random() - 0.5);

    // Select the first three incorrect answers
    let optionsList = incorrectAnswer.slice(0, 3);

    // Add the correct answer to the list
    optionsList.push(correctAnswer);

    // Shuffle the options list again to ensure the correct answer is not always in the same position
    optionsList.sort(() => Math.random() - 0.5);

    questionElement.innerHTML = `${question.question}`;
    options.innerHTML = `${optionsList.map((option) => `<li class="option">${option}</li>`).join('')}`;

    opt = document.querySelectorAll(".option");
    for (let i = 0; i < opt.length; i++) {
        opt[i].addEventListener("click", optionSelected);
    }
    attachOptionListeners();
}

function attachOptionListeners() {
    opt = document.querySelectorAll(".option");
    for (let i = 0; i < opt.length; i++) {
        opt[i].addEventListener("click", optionSelected);
    }

}

function optionSelected(event) {
    console.log(event.target.textContent);
    clearInterval(counter);
    clearInterval(progressLine);
    let userAns = event.target.textContent;
    let correctAns = questionsList[currentIndex].correct_answer;
    let allOptions = options.children.length;
    console.log(allOptions);

    if (userAns === correctAns) {
        userScore += 1;
        console.log(userScore);
        event.target.classList.add("correct");
        console.log("Answer is Correct!");
        console.log(correctAns);
        console.log('Are they equal?', userAns === correctAns);
    } else {
        event.target.classList.add("incorrect");
        console.log("Answer is wrong!");
        console.log(correctAns);
        console.log('Are they equal?', userAns === correctAns);
    }
    //once selected, disable all other options
    for (let i = 0; i < allOptions; i++) {
        if (options.children[i].textContent == correctAns) {
            options.children[i].classList.add("correct");
        }
    }

    // if incorrect answer, show all correct answers
    for (let i = 0; i < allOptions; i++) {
        options.children[i].classList.add("disabled");
    }

    next_btn.style.display = "block";
}

// top questions counter 
function questionCounter(question_number) {
    const top_q_counter = game_area.querySelector(".total_questions");
    let totalQTag = (`<span><p> ${question_number} </p>of<p> ${questionsList.length} </p>Questions</span>`);
    top_q_counter.innerHTML = totalQTag;
}

function showResultArea() {
    instructions_area.classList.remove("activeInfo");
    game_area.classList.remove("activeGame");
    result_area.classList.add("activeResult");

}

//Results area Function and add active results window
function showResultArea() {
    instructions_area.classList.remove("activeInfo");
    game_area.classList.remove("activeGame");
    result_area.classList.add("activeResult");

    const scoreText = result_area.querySelector(".score_value");

    if (userScore) {
        let scoreTag = (`<span><p> ${userScore} </p> out of <p> ${questionsList.length}</p></span>`);
        scoreText.innerHTML = scoreTag;
    }

    //Calculate percentage function and round to whole number

    let percentage = function calculatePercentage(x, y) {
        return Math.round((x / y) * 100);
    };

    // store percentage function result and put into HTML
    let result = percentage(userScore, questionsList.length) + "%";
    const percentText = document.querySelector(".percentage");

    let percentTag = (`<span>Percentage<p> ${result} </p><span>`);
    percentText.innerHTML = percentTag;

    //Generaging a grade from the users percentage
    const gradeText = document.querySelector(".grade");

    if (result >= 70 + '%') {
        let gradeTag = (`<span>Grade<p> ${'A'} </p></span>`);
        gradeText.innerHTML = gradeTag;
    } else if (result >= 60 + '%') {
        let gradeTag = (`<span>Grade<p> ${'B'} </p></span>`);
        gradeText.innerHTML = gradeTag;
    } else if (result >= 50 + '%') {
        let gradeTag = (`<span>Grade<p> ${'C'} </p></span>`);
        gradeText.innerHTML = gradeTag;
    } else if (result >= 40 + '%') {
        let gradeTag = (`<span>Grade<p> ${'D'} </p></span>`);
        gradeText.innerHTML = gradeTag;
    } else if (result >= 30 + '%') {
        let gradeTag = (`<span>Grade<p> ${'E'} </p></span>`);
        gradeText.innerHTML = gradeTag;
    } else if (result < 29 + '%') {
        let gradeTag = (`<span>Grade<p> ${'U'} </p></span>`);
        gradeText.innerHTML = gradeTag;
    }
}

//timer function
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timer_num.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timer_num.textContent = "0";

            // Selects correct answer when timer runs out and stops user selecting an answer.
            let correctAns = questionsList[currentIndex].correct_answer;
            let allOptions = options.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    options.children[i].classList.add("correct");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }

            //next button appears when answer selected
            next_btn.style.display = "block";
        }
    }
}

// Progress bar function 
function startTimerLine(time) {
    progressLine = setInterval(timer, 160);
    time = 100;
    function timer() {
        time--;
        time_line.style.width = time + "%";
        if (time > 500) {
            clearInterval(progressLine);
        }
    }
}



