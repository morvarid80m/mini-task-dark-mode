// selector element
const btn = document.querySelector(".switch");
const item = document.querySelector(".item");
const body = document.body;

// function 
item.addEventListener("click", function(){
    btn.classList.toggle("show");
    body.classList.toggle("show");
});