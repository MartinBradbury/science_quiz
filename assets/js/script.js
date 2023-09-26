// Creating an array and passing the question number, options and answer

let questions = [
    {
        numb: 1,
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
        numb: 1,
        question: "How many Carbons in a Hexose sugar?",
        answer: "6",
        options: [
            "5",
            "6",
            "7",
            "8"
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



// If the start button is clicked

start_btn.onclick = () => {
    instructions_area.classList.add("activeInfo"); //Shows instructions on click
};

exit_btn.onclick = () => {
    instructions_area.classList.remove("activeInfo");
};

begin_btn.onclick = () => {
    instructions_area.classList.remove("activeInfo");
    game_area.classList.add("activeInfo");
    showQuestions(0);

};



let question_count = 0;



//let question_number = 0;
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
    let question_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span ></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';

    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
}

//Next Button on click

next_btn.onclick = () => {
    question_count++;
    showQuestions(question_count);
};