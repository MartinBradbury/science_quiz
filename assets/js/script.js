// getting required elements using querySelector which identifies elements first time appears.

const start_btn = document.querySelector(".start_btn");
const instructions_area = document.querySelector(".instructions_area");



// If the start button is clicked

start_btn.onclick = () => {
    instructions_area.classList.add("activeInfo"); //Shows instructions on click
};