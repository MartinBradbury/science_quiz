// getting required elements using querySelector which identifies elements first time appears.

const start_btn = document.querySelector(".start_btn");
const instructions_area = document.querySelector(".instructions_area");
const exit_btn = document.querySelector(".exit_btn");
const begin_btn = document.querySelector(".begin_btn");
const game_area = document.querySelector(".game_area");

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

};