
// getting required elements using querySelector which identifies elements first time appears.

const start_btn = document.querySelector(".start_btn");
const instructions_area = document.querySelector(".instructions_area");
const exit_btn = document.querySelector(".exit_btn");
const begin_btn = document.querySelector(".begin_btn");
const game_area = document.querySelector(".game_area");
const option_list = document.querySelector(".option_list");
const timer_num = document.querySelector(".progress_text");
const time_line = document.querySelector(".progress_bar");
const result_area = document.querySelector(".result_area");

// If the start button is clicked

start_btn.addEventListener("click", () => {
    instructions_area.classList.add("activeInfo"); //Shows instructions on click
});

exit_btn.addEventListener("click", () => {
    instructions_area.classList.remove("activeInfo");
});

//shuffle array index questions so questions appear in a random order
questions.sort(() => Math.random() - .5);

begin_btn.addEventListener("click", () => {
    instructions_area.classList.remove("activeInfo");
    game_area.classList.add("activeGame");
    showQuestions(0);
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
});

let question_count = 0;
let question_number = 1;
let counter;
let widthValue = 100;
let timeValue = 15;
let progressLine;
let userScore = 0;

const next_btn = document.querySelector(".next_btn");
const quit = document.querySelector(".quit");

// Reloads the window on quit quiz button click

quit.addEventListener("click", () => {
    window.location.reload();
});

// getting the questions from array

function showQuestions(index) {
    const question_text = document.querySelector(".question_text");
    const option_list = document.querySelector(".option_list");

    let question_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span ></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';


    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;

    //sececting correct answer

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");

    }
}

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(progressLine);

    let userAns = answer.textContent;
    let correctAns = questions[question_count].answer;
    let allOptions = option_list.children.length;

    if (userAns === correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is Correct!");
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is wrong!");
    }

    //once selected, disable all other options
    for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("class", "option correct");
        }
    }

    // if incorrect answer, show all correct answers

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

//Next Button on click

next_btn.addEventListener("click", () => {
    if (question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQuestions(question_count);
        questionCounter(question_number);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(progressLine); //Counter Line
        startTimerLine(widthValue); //start counter line width
        next_btn.style.display = "none";


    } else {
        console.log("Questions complete!");
        showResultArea();

    }
});

//Results area Function

function showResultArea() {
    instructions_area.classList.remove("activeInfo"); //hide instructions window
    game_area.classList.remove("activeGame"); // hide quiz window
    result_area.classList.add("activeResult"); //show results window

    const scoreText = result_area.querySelector(".score_value");

    if (userScore) {
        let scoreTag = '<span><p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    };

    //Calculate percentage function and round to whole number

    var percentage = function calculatePercentage(x, y) {
        return Math.round((x / y) * 100);
    };

    // store percentage function result and put into HTML
    let result = percentage(userScore, questions.length) + "%";
    const percentText = document.querySelector(".percentage");

    let percentTag = '<span>Percentage<p>' + result + '</p><span>';
    percentText.innerHTML = percentTag;

    //Generaging a grade from the users percentage
    const gradeText = document.querySelector(".grade");

    if (result >= 70 + '%') {
        let gradeTag = '<span>Grade<p>' + 'A' + '</p></span>';
        gradeText.innerHTML = gradeTag;
    } else if (result >= 60 + '%') {
        let gradeTag = '<span>Grade<p>' + 'B' + '</p></span>';
        gradeText.innerHTML = gradeTag;
    } else if (result >= 50 + '%') {
        let gradeTag = '<span>Grade<p>' + 'C' + '</p></span>';
        gradeText.innerHTML = gradeTag;
    } else if (result >= 40 + '%') {
        let gradeTag = '<span>Grade<p>' + 'D' + '</p></span>';
        gradeText.innerHTML = gradeTag;
    } else if (result >= 30 + '%') {
        let gradeTag = '<span>Grade<p>' + 'E' + '</p></span>';
        gradeText.innerHTML = gradeTag;
    } else if (result < 29 + '%') {
        let gradeTag = '<span>Grade<p>' + 'U' + '</p></span>';
        gradeText.innerHTML = gradeTag;
    }
};

// top questions counter 
function questionCounter(index) {
    const top_q_counter = game_area.querySelector(".total_questions");

    let totalQTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';

    top_q_counter.innerHTML = totalQTag;
};

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
            let correctAns = questions[question_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
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
};

