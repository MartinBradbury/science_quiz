// Creating an array and passing the question number, options and answer

let questions = [
    {
        number: 1,
        question: "which planet is closest to the Sun?",
        answer: "Mercury",
        options: [
            "Venus",
            "Earth",
            "Jupiter",
            "Mercury"
        ]

    },
    {
        number: 2,
        question: "How many Carbons in a Hexose sugar?",
        answer: "6",
        options: [
            "5",
            "6",
            "7",
            "8"
        ]
    },
    {
        number: 3,
        question: "What is the name of the bond between two Alpha Glucose Molecules?",
        answer: "1-4 Glycosidic",
        options: [
            "1-4 Glycosidic",
            "Ester",
            "Peptide",
            "Hydrogen"
        ]
    },


];


// getting required elements using querySelector which identifies elements first time appears.

const start_btn = document.querySelector(".start_btn");
const instructions_area = document.querySelector(".instructions_area");
const exit_btn = document.querySelector(".exit_btn");
const begin_btn = document.querySelector(".begin_btn");
const game_area = document.querySelector(".game_area");
const option_list = document.querySelector(".option_list");
const timer_num = document.querySelector(".progress_text");
const progress_bar = document.querySelector(".progress_bar");



// If the start button is clicked

start_btn.addEventListener("click", () => {
    instructions_area.classList.add("activeInfo"); //Shows instructions on click
});

exit_btn.addEventListener("click", () => {
    instructions_area.classList.remove("activeInfo");
});

begin_btn.addEventListener("click", () => {
    instructions_area.classList.remove("activeInfo");
    game_area.classList.add("activeInfo");
    showQuestions(0);
    questionCounter(1);
    startTimer(15);
    progressBar(0);

});



let question_count = 0;
let question_number = 1;
let counter;
let timeValue = 15;


//let timer;
//let progressBar;
//let timeValue = 15;
//let widthValue = 0; //check this
//let userScore = 0;

const result_area = document.querySelector(".result_area");
const next_btn = document.querySelector(".next_btn");
const restart = document.querySelector(".restart");
const quit = document.querySelector(".quit");

// Reloads the window on quit quiz button click



// getting the questions from array

function showQuestions(index) {
    const question_text = document.querySelector(".question_text");
    const option_list = document.querySelector(".option_list");
    let question_tag = '<span>' + questions[index].number + ". " + questions[index].question + '</span>';
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

    let userAns = answer.textContent;
    let correctAns = questions[question_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
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

}

//Next Button on click

next_btn.addEventListener("click", () => {
    if (question_count < questions.length) {
        question_count++;
        question_number++;
        showQuestions(question_count);
        questionCounter(question_number);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(frame);





    } else {
        console.log("Questions complete!");
    }
});




// bottom questions counter 


function questionCounter(index) {
    const bottom_q_counter = game_area.querySelector(".total_questions");

    let totalQTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';

    bottom_q_counter.innerHTML = totalQTag;
}




// progress bar timer function

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timer_num.textContent = time;
        time--; //time up or down can choose -- or ++
        if (time < 0) {
            clearInterval(counter);
            timer_num.textContent = "0";
        }
    }
}
// Progress bar function 

function progressBar() {
    let progress_bar = document.querySelector(".progress_bar");
    let widthValue = 1;
    let bar = setInterval(frame, 100);
    function frame() {
        if (widthValue > 100) {
            clearInterval(bar);
        } else {
            widthValue--;
            progress_bar.style.width = widthValue + '%';
        }
    }
}